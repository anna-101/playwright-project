# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchTest.spec.js >> search Condo Property
- Location: tests/searchTest.spec.js:4:5

# Error details

```
ReferenceError: Cannot access 'searchPage' before initialization
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | const searchPage = require('../pageObjects/searchPage');
  3  | 
  4  | test('search Condo Property',async({page})=>{
> 5  |     const searchPage = new searchPage(page);
     |                        ^ ReferenceError: Cannot access 'searchPage' before initialization
  6  |     
  7  |     await page.goto('https://www.propertyguru.com.sg/property-for-sale');
  8  |     await searchPage.homePage.waitFor()
  9  | 
  10 |     await searchPage.searchForProperty('Condo');
  11 |     const resultCount = await searchPage.getItemCount();
  12 | 
  13 | 
  14 |     await expect(await searchPage.getPropertyCardsCount()).toBeGreaterThan(1);
  15 | 
  16 | })
```