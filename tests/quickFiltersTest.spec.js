import {test, expect} from '@playwright/test';
const quickfilterpage = require('../pageObjects/quickFilterPage');

test.beforeEach(async ({ page }) => {
    quickfilterpage = new QuickFilterPage(page);
    await page.goto('https://www.propertyguru.com.sg/property-for-sale');
    await quickfilterpage.quickFilterSection.waitFor();
});

test('Verify Quick Filter options are displayed',async({page})=>{
    await expect(quickfilterpage.quickFilterOptions).toBeVisible();
})

test('Verify Filters',async({page})=>{
    await quickfilterpage.filters.click();
    await expect(quickfilterpage.filtersOptions).toBeVisible();
    await quickfilterpage.bedroomFilter.click();
    await quickfilterpage.selectProperty('Landed');
    await quickfilterpage.checkBoxInput.first().click();
    await quickfilterpage.applyBtn.click();
    await expect(quickfilterpage.filtersModal).not.toBeVisible();
})