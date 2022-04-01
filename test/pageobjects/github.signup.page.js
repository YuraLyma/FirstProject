class SigUpPage {
    get emailInput() { return $('#email'); }
    get emailContinueButton() { return $('#email-container .signup-continue-button'); }
    get  passwordInput() { return $('#password'); }
    get passwordContinueButton() { return $('#password-container .signup-continue-button'); }
    get loginInput() { return $('#login'); }
    get loginContinueButton() { return $('#username-container .signup-continue-button'); }
    get receiveProductUpdatesInput() { return $('#opt_in'); }
    get receiveProductUpdatesContinueButon() { return $('#opt-in-container .signup-continue-button'); }
    get captchaFrame() { return $('//div[@id="captcha-and-submit-container"]//div[contains(text(), "Verify your account")]'); }
    get emailErrorLabel() { return $('#email-err p'); }

    async isEmailInputDisplayed() { return await this.emailInput.isDisplayed(); }
    async fillEmailInput(email) { await this.emailInput.setValue(email); }
    async isEmailContinueButtonEnabled() { return await this.emailContinueButton.isEnabled(); }
    async clickEmailContinueButton() { await this.emailContinueButton.click(); }
    async isPasswordInputDisplayed() { return await this.passwordInput.isDisplayed(); }
    async fillPasswordInput(password) { await this.passwordInput.setValue(password); }
    async isPasswordContinueButtonEnabled() { return await this.passwordContinueButton.isEnabled(); }
    async clickPasswordContinueButton() { await this.passwordContinueButton.click(); }
    async isLoginInputDisplayed() { return await this.loginInput.isDisplayed(); }
    async fillLoginInput(login) { await this.loginInput.setValue(login); }
    async isLoginContinueButtonEnabled() { return await this.loginContinueButton.isEnabled(); }
    async clickLoginContinueButton() { await this.loginContinueButton.click(); }
    async isReceiveProductUpdatesInputDisplayed() { return await this.receiveProductUpdatesInput.isDisplayed(); }
    async fillReceiveProductUpdatesInput(value) { await this.receiveProductUpdatesInput.setValue(value); }
    async isReceiveProductUpdatesContinueButonEnabled() { return await this.receiveProductUpdatesContinueButon.isEnabled(); }
    async clickReceiveProductUpdatesContinueButon() { await this.receiveProductUpdatesContinueButon.click(); }
    async isCaptchaFrameDisplayed() { return await this.captchaFrame.isDisplayed(); }
    async GetEmailErrorLabelText() { return await this.emailErrorLabel.getText(); }
    async isEmailErrorLabelisExisting() { return await this.emailErrorLabel.isExisting(); }
}

module.exports = new SigUpPage();