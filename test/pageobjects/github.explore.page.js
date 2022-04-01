class ExplorePage {
    get topicsLink() { return $('//*[@id="js-pjax-container"]//a[contains(text(), "Topics")]'); }

    async clickTopicsLink() { await this.topicsLink.click(); }
}

module.exports = new ExplorePage();