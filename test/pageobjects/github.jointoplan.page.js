class JoinToPlanPage {
    get userLoginInput() { return $('#user_login'); }
    get userEmailInput() { return $('#user_email'); }
    get userPasswordInput() { return $('#user_password'); }

    async fillUserLoginInput(userLogin) {
        await this.userLoginInput.clearValue();
        await this.userLoginInput.setValue(userLogin);
    }

    async fillUserEmailInput(userEmail) {
        await this.userEmailInput.clearValue();
        await this.userEmailInput.setValue(userEmail);
    }

    async fillUserPasswordInput(userPassword) {
        await this.userPasswordInput.clearValue();
        await this.userPasswordInput.setValue(userPassword);
    }

    async fillLoginForm(userLogin, userEmail, userPasword) {
        await this.fillUserLoginInput(userLogin);
        await this.fillUserEmailInput(userEmail);
        await this.fillUserPasswordInput(userPasword);
    }
}

module.exports = new JoinToPlanPage();