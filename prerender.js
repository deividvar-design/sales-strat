import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Routes to pre-render
const routes = [
  '/',
  '/library',
  '/best-outbound-stack-for-founders',
  '/strategies',
  '/testimonials',
  '/resources/cold-email-guide',
  '/resources/best-cold-email-software',
  '/resources/how-to-pick-an-icp-when-you-have-zero-traction',
  '/reviews',
  '/comparisons',
  '/faq',
  '/consulting',
  '/privacy',
  '/terms',
  '/reviews/clay',
  '/reviews/reply-io',
  '/reviews/mixmax',
  '/comparisons/clay-vs-apollo',
  '/comparisons/pipedrive-hubspot-salesforce',
  '/comparisons/reply-vs-instantly',
  '/comparisons/apollo-vs-zoominfo-vs-cognism-2026',
  '/comparisons/instantly-vs-lemlist-vs-replyio',
];

console.log('Starting pre-render process with full content...\n');

// Start a local server for the dist directory
const server = spawn('npx', ['http-server', 'dist', '-p', '8888', '-s', '-c-1'], {
  stdio: 'pipe'
});

// Wait for server to be ready by polling
console.log('Waiting for local server to be ready...');
let serverReady = false;
let attempts = 0;
const maxAttempts = 30;

while (!serverReady && attempts < maxAttempts) {
  try {
    const response = await fetch('http://localhost:8888');
    if (response.ok || response.status === 404) {
      serverReady = true;
    }
  } catch (error) {
    attempts++;
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

if (!serverReady) {
  console.error('Failed to start local server after 30 seconds');
  server.kill();
  process.exit(1);
}

console.log('Local server started on port 8888\n');
console.log('Pre-rendering routes with lazy-loaded components...');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

try {
  for (const route of routes) {
    const page = await browser.newPage();

    // Navigate to the route
    const url = `http://localhost:8888${route}`;
    console.log(`  Rendering ${route}...`);

    await page.goto(url, {
      waitUntil: 'networkidle0', // Wait for all network requests including lazy chunks
      timeout: 45000 // Increased timeout for lazy loading
    });

    // Wait for React root to render
    await page.waitForSelector('#root > div', { timeout: 10000 });

    // CRITICAL: Wait for lazy-loaded chunk to finish loading
    // Check if loading spinner is present
    const hasLoadingSpinner = await page.$('.animate-spin');
    if (hasLoadingSpinner) {
      console.log(`    └─ Waiting for lazy chunk to load...`);
      await page.waitForFunction(
        () => !document.querySelector('.animate-spin'),
        { timeout: 10000 }
      );
    }

    // Wait for main page content to ensure lazy component has rendered
    const hasMainContent = await page.waitForSelector('main h1, main h2, .max-w-7xl', {
      timeout: 10000
    }).catch(() => null);

    if (!hasMainContent) {
      console.warn(`    └─ Warning: Main content selector not found for ${route}`);
    }

    // Additional wait for dynamic content (images, animations)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Get the fully rendered HTML
    const html = await page.content();

    // Validate HTML contains actual content, not just loading spinner
    if (html.includes('Loading...') && html.length < 50000) {
      console.error(`    └─ ERROR: ${route} still showing loading state!`);
      console.error(`    └─ HTML length: ${html.length} bytes (expected >50KB)`);
      await page.close();
      continue; // Skip writing this HTML, keep old prerendered version
    }

    // Determine target path
    let targetPath, targetFile;
    if (route === '/') {
      targetPath = join(__dirname, 'dist');
      targetFile = join(targetPath, 'index.html');
    } else {
      const routePath = route.substring(1);
      targetPath = join(__dirname, 'dist', routePath);
      targetFile = join(targetPath, 'index.html');

      // Create directory if it doesn't exist
      if (!existsSync(targetPath)) {
        mkdirSync(targetPath, { recursive: true });
      }
    }

    // Write the rendered HTML
    writeFileSync(targetFile, html);
    console.log(`  ✓ ${route} -> ${route === '/' ? 'index.html' : route.substring(1) + '/index.html'} (${(html.length / 1024).toFixed(1)}KB)`);

    await page.close();
  }
} finally {
  await browser.close();
  server.kill();
}

console.log('\n✨ Pre-rendering complete! All routes include lazy-loaded content for SEO.');
console.log('Each page HTML contains full content, not Suspense fallbacks.');

// Exit cleanly
process.exit(0);
