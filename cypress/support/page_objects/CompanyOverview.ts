/// <reference types="Cypress" />

class CompanyOverview  {
    
    selectAllForms() {
        cy.get('#tabFormListing').click();
        return this;
    }

    selectLinkWithText(linkText: string) {
        cy.contains(linkText).click();
        return this;
    }

}

export default CompanyOverview;