const BasePage = require('../src/pages/BasePage');
class QuickFilterPage extends BasePage {
    constructor(page){
        super(page);
        this.propertQuickFilter = page.locator('[da-id="quick-filter-property-type-search-root"]');
        this.filters = page.locator('[da-id="more-filter-button"]');
        this.pricequickFilter = page.locator('[da-id="quick-filter-price-search-root"]');
        this.awaitForElement = page.locator('quick-filter-bedrooms-root');
        this.filtersModal = page.locator('.modal-content.search-filter-modal-root');
        this.bedroomFilter = page.locator('[da-id="bedrooms-2"]');
        this.propertyType = page.locator('hui-chip btn btn-primary');
        this.applyBtn = page.getByRole('button', { name: 'Apply' });
        this.checkBoxInput = page.locator('checkbox-input');
    }

     async selectProperty(property){
     await this.page
        .locator(this.propertyType)
        .filter({ hasText: property })
        .click();

 }
}