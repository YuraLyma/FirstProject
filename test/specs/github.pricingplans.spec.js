const random = require('../utils/random.utils');
const mainPage = require('../pageobjects/github.main.page');
const pricingPage = require('../pageobjects/github.pricing.page');
const joinToPlanPage = require('../pageobjects/github.jointoplan.page');

describe('GitHub site', () => {
    it('Pricing plans', async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com/');
        
        await mainPage.hoverToPricingMenu();
        await mainPage.clickPricingPlansLink();

        await pricingPage.clickFreePricingPlanButton();

        await joinToPlanPage.fillLoginForm(random.getRndText(5, 10), random.getRndEmail(5, 10), random.getRndText(15, 20));

        await browser.saveScreenshot('test/resources/FreePlan_JoinToPlan.png');
    });
});