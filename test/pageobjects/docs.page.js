class DocsPage {
    get apiLink() { return $('//a[text()="API"]'); }

    async clickAPILink() { await  this.apiLink.click(); }
}

module.exports = new DocsPage();