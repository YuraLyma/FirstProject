class VersionsPage {
    get v5DocumentationLink() { return $('//th[text()="v5"]//following-sibling::td//a[text()="Documentation"]'); }

    async clickV5DocumentationLink() { await this.v5DocumentationLink.click(); }
}

module.exports = new VersionsPage();