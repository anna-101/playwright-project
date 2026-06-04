const { chromium } = require('playwright');

(async () => {

    const context =
      await chromium.launchPersistentContext(
        './user-data',
        {
            headless: false,
            channel: 'chrome'
        }
      );

    const page = context.pages()[0];

    await page.goto(
      'https://www.propertyguru.com.sg/property-for-sale'
    );

    console.log(
      'Solve Cloudflare verification and press CTRL+C'
    );

})();