class PricingPage {
    get freePricingPlanButton() { return $('//div[contains(@class,"js-pricing-plan")]//a[contains(text(), "Join for free")]'); }

    async clickFreePricingPlanButton() { await this.freePricingPlanButton.click(); }
}

module.exports = new PricingPage();