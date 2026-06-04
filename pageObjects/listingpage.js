const BasePage = require('../src/pages/BasePage');

class ListingPage extends BasePage {

    constructor(page) {
        super(page);

        this.propertyCards = page.locator('[data-testid="listing-card"]');

        this.propertyPrice = page.locator('[data-testid="listing-price"]');

        this.nextPageButton = page.locator('[aria-label="Next"]');

        this.propertyTitles = page.locator('.listing-description');
    }

    async getDisplayedProperties() {

        const prices =
            await this.propertyPrice.allTextContents();

        return prices.map(price => ({
            price: Number(
                price.replace(/[$,]/g, '')
            )
        }));
    }

     async getFirstProperty() {

        return (
            await this.propertyTitles
                .first()
                .textContent()
        )?.trim();
    }

    async getCurrentPageProperties() {

        return await this.propertyTitles
            .allTextContents();
    }

    async nextPage() {

        await this.nextPageButton.click();

        await this.page.waitForLoadState(
            'networkidle'
        );
    }
}

module.exports = ListingPage;