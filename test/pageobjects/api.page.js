class ApiPage {
    get contributeLink() { return $('//a[@class="table-of-contents__link toc-highlight" and text()="Contribute"]'); }
    get helpLink() { return $('//a[text()="Help"]'); }

    async clickContributeLink() { await this.contributeLink.click(); }
    async clickHelpLink() { await this.helpLink.click(); }
}

module.exports = new ApiPage();