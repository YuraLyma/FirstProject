class SearchPage {
    get typeScriptLink() { return $('//a[contains(@href, "TypeScript")]'); }
    get firstFoundResultLink() { return $$('.repo-list li .v-align-middle')[0]; }

    async clickTypeScriptLink() { await this.typeScriptLink.click(); }
    async clickfirstFoundResultLink() { await this.firstFoundResultLink.click(); }
}

module.exports = new SearchPage();