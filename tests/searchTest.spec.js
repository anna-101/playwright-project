import {test, expect} from '@playwright/test';
const searchPage = require('../pageObjects/searchPage');
const SearchApi = require('../api/SearchApi');

let searchPage;
let searchapi

test.beforeEach(async ({ page, request }) => {
    searchPage = new SearchPage(page);
    searchapi = new SearchApi(page.request);
});


test('search Condo Property',async({page})=>{
    
    await page.goto('https://www.propertyguru.com.sg/property-for-sale');
    await searchpage.homePage.waitFor()

    await searchpage.searchForProperty('Condo');
    const resultCount = await searchpage.getItemCount();


    await expect(await searchpage.getPropertyCardsCount()).toBeGreaterThan(1);

})

test('Verify No Search results for invalid keyword',async({page, request})=>{
        const searchKeyword = 'InvalidSearchKeyword';
        
        const searchResponsePromise = searchapi.searchProperty(searchKeyword);

        await searchPage.searchForProperty(searchKeyword);

        const searchResponse = await searchResponsePromise;

        const apiData = await searchResponse.json();

        //Validate API response

        expect(apiData.results.length).toBe(0);

        //Validate on UI

        await expect(searchPage.noResultsMessage)
            .toBeVisible();

    })

    test('Verify Search Typeahead suggestions',async({page})=>{
        await searchPage.searchInput.fill('Condo');
        await searchPage.SearchPage.suggestions.textContent().then(text => {
            expect(text).toContain('Condo');
        });
        await searchPage.clearSearchInputBox.click();
        await expect(searchPage.searchTypehead).toBeVisible();
    })

    test('Verify Search By Area',async({page})=>{
        await searchPage.clickDropdownOption('Search by Area');
        await searchPage.searchByArea("Bedok");
         await expect(await searchpage.getPropertyCardsCount()).toBeGreaterThan(1);
    })

   