const assert = require('assert');
const mainPage = require('../pageobjects/github.main.page');
const signInPage = require('../pageobjects/github.signin.page');
const userPage = require('../pageobjects/github.user.page');

describe('GitHub site', () => {
    it('Sign in on GitHub', async () => {
        await browser.maximizeWindow();
        await browser.url('https://github.com/');
        
        await mainPage.clickSignInLink();

        await signInPage.fillLoginInput('jakobwebdriveriotest@gmail.com');
        await signInPage.fillPasswordInput('jAkob_gitHUB_2022');
        await browser.waitUntil(async () => (await signInPage.loginInput.getValue() !== '' && await signInPage.passwordInput.getValue !== ''));
        await signInPage.clickSignInButton();

        await userPage.clickViewProfileAndMoreLink();

        assert.strictEqual(await userPage.UserNameText(), 'JakobGrohg', 'User name is not "JakobGrohg"');
    });
});