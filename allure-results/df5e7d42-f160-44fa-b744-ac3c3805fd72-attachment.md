# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchTest.spec.js >> search Condo Property
- Location: tests/searchTest.spec.js:4:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'waitFor')
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - img "Icon for www.propertyguru.com.sg" [ref=e5]
        - heading "www.propertyguru.com.sg" [level=1] [ref=e6]
      - heading "Performing security verification" [level=2] [ref=e7]
      - paragraph [ref=e8]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e12]:
    - generic [ref=e14]:
      - generic [ref=e16]:
        - text: "Ray ID:"
        - code [ref=e17]: a0654f10f88ca74e
      - generic [ref=e18]:
        - generic [ref=e19]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e20] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e22] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | const searchPage = require('../pageObjects/searchPage');
  3  | 
  4  | test('search Condo Property',async({page})=>{
  5  |     await page.goto('https://www.propertyguru.com.sg/property-for-sale');
> 6  |     await searchPage.homePage.waitFor()
     |                               ^ TypeError: Cannot read properties of undefined (reading 'waitFor')
  7  | 
  8  |     await searchPage.searchForProperty('Condo');
  9  |     const resultCount = await searchPage.getItemCount();
  10 | 
  11 | 
  12 |     await expect(await searchPage.getPropertyCardsCount()).toBeGreaterThan(1);
  13 | 
  14 | })
```