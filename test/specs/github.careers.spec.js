const mainPage = require('../pageobjects/github.main.page');
const careersPage = require('../pageobjects/github.careers.page');

describe('GitHub site', () => {
    it('Tpe to console log careers', async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com/');

        await mainPage.clickCareersLink();

        await careersPage.clickOpenPositionsLink();
        await careersPage.ConsoleLogOpenedPositions();
    });
});