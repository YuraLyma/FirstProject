const assert = require('assert');
const mainPage = require('../pageobjects/github.main.page');

describe('GitHub site', () => {
    it('Sign in on GitHub', async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com/');

        await mainPage.hoverToEnterpriseLink();
        await mainPage.hoverToProductMenu();
        await browser.waitUntil(async () => (await mainPage.isProductSubMenuDisplayed()));
        assert.ok(await mainPage.isProductSubMenuDisplayed(), 'Product submenu is not displayed');

        await mainPage.hoverToEnterpriseLink();
        await mainPage.hoverToExploreMenu();
        await browser.waitUntil(async () => (await mainPage.isExploreSubmenuDisplayed()));
        assert.ok(await mainPage.isExploreSubmenuDisplayed(), 'Explore submenu is not displayed');

        await mainPage.hoverToEnterpriseLink();
        await mainPage.hoverToPricingMenu();
        await browser.waitUntil(async () => (await mainPage.isPricingSubmenuDisplayed()));
        assert.ok(await mainPage.isPricingSubmenuDisplayed(), 'Pricing submenu is not displayed');
    });
});