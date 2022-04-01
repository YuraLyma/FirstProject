class MainPage {
    get signUpLink() { return $('//a[contains(@class, "HeaderMenu-link") and contains(text(), "Sign up")]'); }
    get signInLink() { return $('//a[contains(@class, "HeaderMenu-link") and contains(text(), "Sign in")]'); }
    get productMenu() { return $('//summary[contains(text(), "Product")]'); }
    get productSubmenu() { return $('//summary[contains(text(), "Product")]//following-sibling::div'); }
    get exploreMenu() { return $('//summary[contains(text(), "Explore")]'); }
    get exploreSubmenu() { return $('//summary[contains(text(), "Explore")]//following-sibling::div'); }
    get pricingMenu() {return $('//summary[contains(text(), "Pricing")]'); }
    get pricingSubmenu() { return $('//summary[contains(text(), "Pricing")]//following-sibling::div'); }
    get enterpriseLink() { return $('//nav//a[contains(text(), "Enterprise")]'); }
    get pricingPlansLink() { return $('//a[contains(text(), "Plans")]'); }
    get exploreGitHubLink() { return $('//a[contains(text(), "Explore GitHub")]'); }
    get searchInput() { return $('.header-search-input'); }
    get startFreeTrialLink() { return $('//a[contains(text(), "Start a free trial")]'); }
    get careersLink() { return $('//a[contains(text(), "Careers")]'); }
    get emailAddressInput() { return $('#user_email'); }
    get signUpForGithubButton() { return $('form .btn-signup-mktg'); }
    
    async clickSignUpLink() { await this.signUpLink.click(); }
    async clickSignInLink() { await this.signInLink.click(); }
    async hoverToProductMenu() { await this.productMenu.moveTo(); }
    async isProductSubMenuDisplayed() {return await this.productSubmenu.isDisplayed(); }
    async hoverToExploreMenu() { await this.exploreMenu.moveTo(); }
    async isExploreSubmenuDisplayed() { return await this.exploreSubmenu.isDisplayed(); }
    async hoverToPricingMenu() { await this.pricingMenu.moveTo(); }
    async isPricingSubmenuDisplayed() { return await this.pricingSubmenu.isDisplayed(); }
    async hoverToEnterpriseLink() { await this.enterpriseLink.moveTo(); }
    async clickPricingPlansLink() { await this.pricingPlansLink.click(); }
    async clickExploreGitHubLink() { await this.exploreGitHubLink.click(); }
    async fillSearchInput(searchText) { await this.searchInput.setValue(searchText); }
    async clickStartFreeTrialLink() { await this.startFreeTrialLink.click(); }
    async clickCareersLink() { await this.careersLink.click(); }
    async fillEmailAddressInput(email) { await this.emailAddressInput.setValue(email); }
    async clickSignUpForGithubButton() { await this.signUpForGithubButton.click(); }
}

module.exports = new MainPage();