const assert = require('assert');
const random = require('../utils/random.utils');
const mainPage = require('../pageobjects/github.main.page');
const signUpPage = require('../pageobjects/github.signup.page');

describe('GitHub site', () => {
    it('Registration (sign up, body) on GitHub (negative)', async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com/');
        
        await mainPage.fillEmailAddressInput('jakobwebdriveriotest@gmail.com');
        await mainPage.clickSignUpForGithubButton();
        
        await browser.waitUntil(async () => (await signUpPage.isEmailInputDisplayed()));
        assert.strictEqual(await signUpPage.GetEmailErrorLabelText(), 'Email is invalid or already taken');
        
        await browser.saveScreenshot('test/resources/BodySignUp_negative.png');
    });

    it('Registration (sign up, body) on GitHub (positive)', async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com/');
        
        await mainPage.fillEmailAddressInput(random.getRndEmail(10, 15));
        await mainPage.clickSignUpForGithubButton();
        
        await browser.waitUntil(async () => (await signUpPage.isEmailInputDisplayed()));
        assert.strictEqual(await signUpPage.isEmailErrorLabelisExisting(), false);
        
        await browser.saveScreenshot('test/resources/BodySignUp_positive.png');
    });
});