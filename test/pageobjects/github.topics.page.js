class TopicsPage {
    get topicsTitle() { return $('.h1'); }

    async topicsTitleText() { return await this.topicsTitle.getText() ;}
}

module.exports = new TopicsPage();