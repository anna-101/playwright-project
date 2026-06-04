class BasePage {
    constructor(page){
        this.page = page;
    }

    async click(locator){
        await locator.click();
    }

    async fill(locator,value){
        await locator.fill(value);
    }

    async getText(locator){
        await locator.textContent();
    }

    async awaitForElement(locator){
        await locator.waitFor();
    }

    async navigateTo(url){
        await this.page.goto(url);
    }

     async getElementsCount(locator){
        return await locator.count();
    }

    async clickOptionByText(locator, text){

        await locator
            .filter({ hasText: text })
            .click();
    }
}
module.exports = BasePage;