const assert = require('assert');
const mainPage = require('../pageobjects/github.main.page');
const searchPage = require('../pageobjects/github.search.page');

describe('GitHub site', () => {
    it('Search field', async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com/');
        
        await mainPage.fillSearchInput('webdriverio');
        await browser.keys('Enter');

        await searchPage.clickTypeScriptLink();
        await searchPage.clickfirstFoundResultLink();

        assert.ok((await browser.getUrl()).includes('webdriverio'), 'Url is not include "webdriverio" text');
    });
});