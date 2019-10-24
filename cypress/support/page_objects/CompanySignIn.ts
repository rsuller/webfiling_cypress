/// <reference types="Cypress" />

class CompanySignIn {

    enterCompanyDetails(companyNumber: string, authcode: string) {
        cy.get("input[id='companySignInPage\.coNum']").type(companyNumber);
        cy.get("input[id='companySignInPage\.authCode']").type(authcode);
        cy.get('.button').click();
    }

}
export default CompanySignIn