class UserPage {
    get viewProfileAndMoreLink() { return $('.js-feature-preview-indicator-container summary.Header-link'); }
    get userNameLabel() { return $('.user-profile-link strong'); }

    async clickViewProfileAndMoreLink() { await this.viewProfileAndMoreLink.click(); }
    async UserNameText() { return await this.userNameLabel.getText(); }
}

module.exports = new UserPage();