const random = require('../utils/random.utils');
const mainPage = require('../pageobjects/github.main.page');
const signUpPage = require('../pageobjects/github.signup.page');

describe('GitHub site', () => {
    it('Registration (sign up, header) on GitHub', async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com/');
        
        await mainPage.clickSignUpLink();
        
        await browser.waitUntil(async () => (await signUpPage.isEmailInputDisplayed()));
        await signUpPage.fillEmailInput(random.getRndEmail(5, 10));
        await browser.waitUntil(async () => (await signUpPage.isEmailContinueButtonEnabled()));
        await signUpPage.clickEmailContinueButton();

        await browser.waitUntil(async () => (await signUpPage.isPasswordInputDisplayed()));
        await signUpPage.fillPasswordInput(random.getRndText(15, 25));
        await browser.waitUntil(async () => (await signUpPage.isPasswordContinueButtonEnabled()));
        await signUpPage.clickPasswordContinueButton();

        await browser.waitUntil(async () => (await signUpPage.isLoginInputDisplayed()));
        await signUpPage.fillLoginInput(random.getRndText(5, 10));
        await browser.waitUntil(async () => (await signUpPage.isLoginContinueButtonEnabled()));
        await signUpPage.clickLoginContinueButton();

        await browser.waitUntil(async () => (await signUpPage.isReceiveProductUpdatesInputDisplayed()));
        await signUpPage.fillReceiveProductUpdatesInput(random.getRndYesOrNo());
        await browser.waitUntil(async () => (await signUpPage.isReceiveProductUpdatesContinueButonEnabled()));
        await signUpPage.clickReceiveProductUpdatesContinueButon();

        await browser.waitUntil(async () => (await signUpPage.isCaptchaFrameDisplayed));
        await browser.saveScreenshot('test/resources/HeaderSignUp.png');
    });
});