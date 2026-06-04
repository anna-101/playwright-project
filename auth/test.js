const { chromium } = require('playwright');

(async () => {

  const browser = await chromium.launch({
      channel: 'chrome',
      headless: false
  });

  const page = await browser.newPage();

  await page.goto(
      'https://www.propertyguru.com.sg/property-for-sale'
  );

})();