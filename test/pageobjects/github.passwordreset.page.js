class PasswordResetPage {
    get emailInput() { return $('#email_field'); }

    async fillEmailInput(login) { await this.emailInput.setValue(login); }
}

module.exports = new PasswordResetPage();