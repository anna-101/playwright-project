import {test, expect} from '@playwright/test';
const quickfilterpage = require('../pageObjects/quickFilterPage');
const listingpage = require('../pageObjects/listingpage');

test.beforeEach(async ({ page }) => {
    quickfilterpage = new QuickFilterPage(page);
    listingpage = new ListingPage(page);
    await page.goto('https://www.propertyguru.com.sg/property-for-sale');
    await quickfilterpage.quickFilterSection.waitFor();
});

test('Verify Quick Filter options are displayed',async({page})=>{
    await expect(quickfilterpage.quickFilterOptions).toBeVisible();
})

    test('Filter by 3 bedrooms',
        async ({ page }) => {

        await listingpage.selectBedroomFilter('3');

        const results =
        await listingpage.getDisplayedProperties();

        for(const property of results){

            expect(property.bedrooms)
            .toBeGreaterThanOrEqual(3);
        }

})

test('Apply Price Filter', async ({ page }) => {

    await quickfilterpage.applyPriceFilter(
        '500K',
        '1M'
    );

    const prices =
        await quickfilterpage.getPropertyPrices();

    prices.forEach(price => {

        expect(price)
            .toBeGreaterThanOrEqual(500000);

        expect(price)
            .toBeLessThanOrEqual(1000000);
    });
});