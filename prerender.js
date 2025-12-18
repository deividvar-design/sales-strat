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
  '/reviews',
  '/comparisons',
  '/faq',
  '/consulting',
  '/privacy',
  '/terms',
  '/reviews/clay',
  '/reviews/reply-io',
  '/comparisons/clay-vs-apollo',
  '/comparisons/pipedrive-hubspot-salesforce',
  '/comparisons/reply-vs-instantly',
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
console.log('Pre-rendering routes with puppeteer...');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

try {
  for (const route of routes) {
    const page = await browser.newPage();

    // Navigate to the route
    const url = `http://localhost:8888${route}`;
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for React to render (look for root content)
    await page.waitForSelector('#root > div', { timeout: 10000 });

    // Wait a bit more for any dynamic content
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Get the fully rendered HTML
    const html = await page.content();

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
    console.log(`  ✓ ${route} -> ${route === '/' ? 'index.html' : route.substring(1) + '/index.html'}`);

    await page.close();
  }
} finally {
  await browser.close();
  server.kill();
}

console.log('\n✨ Pre-rendering complete! All routes now contain full tool content for SEO.');
console.log('Tool names, descriptions, and reviews are now visible in the raw HTML.');

// Exit cleanly
process.exit(0);
