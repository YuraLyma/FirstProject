class OrganizationsEnterprisePlanPage {
    get enterpriseCloudButton() { return $('.pricing-recommended-plan'); }
    get enterpriseServerButton() { return $('//h2[contains(text(), "Enterprise Server")]'); }

    async clickEnterpriseCloudButton() { await this.enterpriseCloudButton.click(); }
    async clickEnterpriseServerButton() { await this.enterpriseServerButton.click(); }
}

module.exports = new OrganizationsEnterprisePlanPage();