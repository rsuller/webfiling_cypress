"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompanySignIn {
    enterCompanyDetails(companyNumber, authcode) {
        cy.get("input[id='companySignInPage\.coNum']").type(companyNumber);
        cy.get("input[id='companySignInPage\.authCode']").type(authcode);
        cy.get('.button').click();
    }
}
exports.default = CompanySignIn;
