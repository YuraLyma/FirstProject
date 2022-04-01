class MainPage {
    get docsLink() { return $('//a[contains(text(), "Docs")]'); }

    async clickDocsLink() { await this.docsLink.click(); }
}

module.exports = new MainPage();