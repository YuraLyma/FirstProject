const assert = require('assert');

describe('GitHub site', () => {
    it('Tpe to console log careers', async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com/');
        
        const automateLink = await $("//div[contains(@class, 'sub-nav-mktg-links')]//a[contains(text(), 'Automate')]");
        await automateLink.click();
        const automateLabel = await $("//div[@id='home-automate']//h2");
        await automateLabel.scrollIntoView();
        assert.ok(await automateLabel.isDisplayed());

        await browser.pause(3000);
    });
});