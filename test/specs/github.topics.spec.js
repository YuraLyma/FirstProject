const assert = require('assert');
const mainPage = require('../pageobjects/github.main.page');
const explorePage = require('../pageobjects/github.explore.page');
const topicsPage = require('../pageobjects/github.topics.page');

describe('GitHub site', () => {
    it('Eplore - topics', async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com/');
        
        await mainPage.hoverToExploreMenu();
        await mainPage.clickExploreGitHubLink();

        await explorePage.clickTopicsLink();

        assert.strictEqual(await topicsPage.topicsTitleText(), 'Topics', 'Title has not "Topics" text');
    });
});