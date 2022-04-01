class CareersPage {
    get openPositionsLink() { return $('//a[contains(text(), "Open positions")]'); }
    get allOpenedPositions() { return $$('//div[@class="pb-md-6"]//div[contains(@class, "Details")]//button//h3'); }

    async clickOpenPositionsLink() { await this.openPositionsLink.click(); }

    async ConsoleLogOpenedPositions() {
        let positions = await this.allOpenedPositions;
        let positionsInfo = [];

        for(let i = 0; i < positions.length; i++) {
            let positionName = await positions[i].getText();
            positionsInfo[i] = `position${i+1}. ${positionName}`;
        }

        for(let pInfo of positionsInfo) {
            console.log(pInfo);
        }
    }
}

module.exports = new CareersPage();