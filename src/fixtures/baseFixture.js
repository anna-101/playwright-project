const base = require('@playwright/test');
const HomePage = require('../pageObjects/HomePage');
const SearchPage = require('../pageObjects/SearchPage');
const QuickFilterPage = require('../pageObjects/QuickFilterPage');

exports.test = base.test.extend({


    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    },

    quickFilterPage: async ({ page }, use) => {
        await use(new QuickFilterPage(page));
    }
});

exports.expect = base.expect;