class SignInPage {
    get loginInput() { return $('#login_field'); }
    get passwordInput() { return $('#password'); }
    get signInButton() { return $('input.js-sign-in-button'); }
    get forgotPasswordLink() { return $('//a[text()="Forgot password?"]'); }
    get incorrectUserPasswordLabel() { return $('#js-flash-container .px-2'); }

    async fillLoginInput(login) {
        await this.loginInput.clearValue();
        await this.loginInput.setValue(login);
    }

    async fillPasswordInput(password) {
        await this.passwordInput.clearValue();
        await this.passwordInput.setValue(password);
    }

    async clickSignInButton() { await this.signInButton.click(); }
    async clickForgotPasswordLink() { await this.forgotPasswordLink.click(); }
    async isIncorrectUserPasswordLabelDisplayed() { return await this.incorrectUserPasswordLabel.isDisplayed(); }
}

module.exports = new SignInPage();