import puppeteer from 'puppeteer';

console.log('Testing page load with console output...\n');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

try {
  const page = await browser.newPage();

  // Capture console messages
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    console.log(`[BROWSER ${type.toUpperCase()}]:`, text);
  });

  // Capture page errors
  page.on('pageerror', error => {
    console.log('[BROWSER ERROR]:', error.message);
  });

  // Capture failed requests
  page.on('requestfailed', request => {
    console.log('[REQUEST FAILED]:', request.url(), request.failure().errorText);
  });

  const testUrl = 'http://localhost:8890/';
  console.log(`Navigating to ${testUrl}...`);
  await page.goto(testUrl, {
    waitUntil: 'networkidle0',
    timeout: 15000
  });

  console.log('\nPage loaded. Waiting for #root > div...');

  // Try to wait for React to mount
  try {
    await page.waitForSelector('#root > div', { timeout: 5000 });
    console.log('✓ React mounted successfully!');

    // Check content
    const content = await page.$eval('#root', el => el.innerHTML);
    console.log('\nRoot content length:', content.length, 'characters');
    console.log('Has main content:', content.includes('<main'));
  } catch (error) {
    console.log('✗ React did NOT mount:', error.message);

    // Check what's in #root
    const rootContent = await page.$eval('#root', el => el.innerHTML);
    console.log('\nRoot innerHTML:', rootContent.substring(0, 200));

    // Check if scripts loaded
    const scripts = await page.$$eval('script[type="module"]', scripts =>
      scripts.map(s => s.src)
    );
    console.log('\nModule scripts found:', scripts);
  }

} finally {
  await browser.close();
  console.log('\nBrowser closed.');
  process.exit(0);
}
