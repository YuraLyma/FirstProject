const assert = require('assert');
const random = require('../utils/random.utils');
const mainPage = require('../pageobjects/github.main.page');
const signInPage = require('../pageobjects/github.signin.page');
const passwordResetPage = require('../pageobjects/github.passwordreset.page');

describe('GitHub site', () => {
    it('Forgor password (positive)', async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com/');
        
        await mainPage.clickSignInLink();
        await signInPage.fillLoginInput(random.getRndText(15, 25));
        await signInPage.fillPasswordInput(random.getRndText(15, 25));
        await signInPage.clickSignInButton();
        assert.ok(await signInPage.isIncorrectUserPasswordLabelDisplayed(), '"Incorrect username or password" message not displayed');

        await signInPage.clickForgotPasswordLink();
        await passwordResetPage.fillEmailInput('jakobwebdriveriotest@gmail.com');
        await browser.saveScreenshot('test/resources/ForgotPassword_positive.png');
    });

    it('Forgor password (negative)', async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com/');
        
        await mainPage.clickSignInLink();
        await signInPage.fillLoginInput(random.getRndText(15, 25));
        await signInPage.fillPasswordInput(random.getRndText(15, 25));
        await signInPage.clickSignInButton();
        assert.ok(await signInPage.isIncorrectUserPasswordLabelDisplayed(), '"Incorrect username or password" message not displayed');

        await signInPage.clickForgotPasswordLink();
        await passwordResetPage.fillEmailInput(random.getRndEmail(5, 15));
        await browser.saveScreenshot('test/resources/ForgotPassword_negative.png');
    });
});