const random = require('../utils/random.utils');
const mainPage = require('../pageobjects/github.main.page');
const organizationsEnterprisePlanPage = require('../pageobjects/github.organizations.enterpriseplan.page');
const joinToPlanPage = require('../pageobjects/github.jointoplan.page');
const enterpriseTrialPage = require('../pageobjects/github.enterprisetrial.page');

describe('GitHub site', () => {
    it('Enterpriese cloud/server', async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com/');
        
        await mainPage.clickStartFreeTrialLink();

        await organizationsEnterprisePlanPage.clickEnterpriseCloudButton();

        await joinToPlanPage.fillLoginForm(random.getRndText(5, 10), random.getRndEmail(10, 15), random.getRndText(15, 20));

        await browser.saveScreenshot('test/resources/EnterpriseCloud_JoinToPlan.png');

        await browser.back();

        await organizationsEnterprisePlanPage.clickEnterpriseServerButton();

        await enterpriseTrialPage.fillContractRequestForm(random.getRndText(10, 15), random.getRndText(5, 15), random.getRndEmail(10, 15));
        await enterpriseTrialPage.clickDeployGithuOnAwsRadionButton();
        await enterpriseTrialPage.clickYesRadionButton();
        await enterpriseTrialPage.fillQuestionListArea(random.getRndText(50, 100));
        await enterpriseTrialPage.clickContractRequestAgreedToTermsCheckbox();

        await browser.saveScreenshot('test/resources/EnterpriseServer_JoinToPlan.png');
    });
});