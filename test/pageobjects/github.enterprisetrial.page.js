class EnterpriseTrialPage {
    get contractRequestNameInput() { return $('#contact_request_name'); }
    get contractRequestOrganizationNameInput() { return $('#contact_request_organization_name'); }
    get contractRequestEmailInput() { return $('#contact_request_email'); }
    get deployGithuOnAwsRadionButton() { return $('#contact_request_instance_type_aws'); }
    get yesRadionButton() { return $('#questions_yes'); }
    get questionListArea() { return $('#questions-list'); }
    get contractRequestAgreedToTermsCheckbox() { return $('#contact_request_agreed_to_terms'); }

    async fillContractRequestNameInput(contractRequestName) {
        await this.contractRequestNameInput.clearValue();
        await this.contractRequestNameInput.setValue(contractRequestName);
    }

    async fillContractRequestOrganizationNameInput(contractRequestOrganizationName) {
        await this.contractRequestOrganizationNameInput.clearValue();
        await this.contractRequestOrganizationNameInput.setValue(contractRequestOrganizationName);
    }

    async fillContractRequestEmailInput(contractRequestEmail) {
        await this.contractRequestEmailInput.clearValue();
        await this.contractRequestEmailInput.setValue(contractRequestEmail);
    }

    async fillContractRequestForm(contractRequestName, contractRequestOrganizationName, contractRequestEmail) {
        await this.fillContractRequestNameInput(contractRequestName);
        await this.fillContractRequestOrganizationNameInput(contractRequestOrganizationName);
        await this.fillContractRequestEmailInput(contractRequestEmail);
    }

    async clickDeployGithuOnAwsRadionButton() { await this.deployGithuOnAwsRadionButton.click(); }
    async clickYesRadionButton() { await this.yesRadionButton.click(); }
    async fillQuestionListArea(question) { await this.questionListArea.setValue(question); }
    async clickContractRequestAgreedToTermsCheckbox() { await this.contractRequestAgreedToTermsCheckbox.click(); }
}

module.exports = new EnterpriseTrialPage();