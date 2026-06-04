# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchTest.spec.js >> search Condo Property
- Location: tests/searchTest.spec.js:4:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /PropertyGuru/
Received string:  "Just a moment..."
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    14 × unexpected value "Just a moment..."

```

```yaml
- main:
  - img "Icon for www.propertyguru.com.sg"
  - heading "www.propertyguru.com.sg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a06540c3097ba848
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | const searchPage = require('../pageObjects/searchPage');
  3  | 
  4  | test('search Condo Property',async({page})=>{
  5  |     await page.goto('https://www.propertyguru.com.sg/property-for-sale');
> 6  |     await expect(page).toHaveTitle(/PropertyGuru/);
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  7  | 
  8  |     await searchPage.searchForPropert('Condo');
  9  |     const resultCount = await searchPage.getItemCount();
  10 | 
  11 | 
  12 |     await expect(await searchPage.getPropertyCardsCount()).toBeGreaterThan(1);
  13 | 
  14 | })
```