class HelpPage {
    get needHelpText() { return $('header h1'); }
    get versionLink() { return $('a[href*="versions"]'); }

    async isNeedHelpTextDisplayed() {  return await this.needHelpText.isDisplayed(); }
    async clickVersionLink() { await this.versionLink.click(); }
}

module.exports = new HelpPage();