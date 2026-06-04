const BasePage = require('../src/pages/BasePage');
class SearchPage  extends BasePage {

    constructor(page){
        super(page);
        this.searchInput = page.locator('input[da-id="search-box-input"]');
        this.homePage = page.locator('.navbar-brand');
        this.searchSuggestions = page.locator('[id="search-typeahead-item-0"]');
        this.propertyCards = page.locator('[da-id="parent-listing-card-v2-regular"]');
        this.searchCountTitle = page.locator('.page-title');
        this.itemCount = page.locator('.page-title');
        this.clearSearchInputBox = page.locator('[da-id="search-box-clear"]');
        this.searchTypehead = page.locator('[id="search-typeahead-item-0"]');
        this.searchByTitle = page.locator('[da-id="search-option-title"]');
        this.searchInsideModal = page.locator('hive-searchinput');
        this.checkBoxInput = page.locator('checkbox-input');
        this.applyBtn = page.getByRole('button', { name: 'Apply' });
        this.noResultsMessage = page.locator('p', { hasText: 'No results found' });
}

    async searchForProperty(keyword){
        await this.fill(this.searchInput,keyword);
        await this.click(this.searchButton);
    }

    async getSearchResultCount(){
        return await this.getElementCount(this.propertyCards);
    }

    async getSearchCountTitle(){
        return await this.itemCount.textContent();
    }

    async clickDropdownOption(optionText) {
    await this.page
        .locator(this.searchByTitle)
        .filter({ hasText: optionText })
        .click();
}

 async searchByArea(areaName){
    await this.fill(this.searchInsideModal, areaName);
    await this.ckechBoxInput.first().click();
    await this.click(this.applyBtn);
 }
}
module.exports = SearchPage;