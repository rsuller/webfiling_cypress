"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyOverview_1 = require("../../../support/page_objects/CompanyOverview");
const CompanySignIn_1 = require("../../../support/page_objects/CompanySignIn");
const AllForms_1 = require("../../../support/page_objects/AllForms");
const DirectorsAndSecretaries_1 = require("../../../support/page_objects/DirectorsAndSecretaries");
beforeEach(() => {
    // Sign into Webfiling
    cy.signIntoWebfiling();
    // Sign into company to file for
    const companySignIn = new CompanySignIn_1.default();
    companySignIn.enterCompanyDetails('00006400', '222222');
});
describe('Change of registered office address', () => {
    it('File successful TM01', () => {
        const companyOverview = new CompanyOverview_1.default();
        const allForms = new AllForms_1.default();
        const directorsAndSecretaries = new DirectorsAndSecretaries_1.default();
        // Go to terminate officers
        // Select all forms
        companyOverview.selectAllForms();
        allForms.selectDirectorAndSecretaries();
        allForms.selectTM01();
        directorsAndSecretaries.checkTableContents();
        directorsAndSecretaries.selectOfficerToRemove('Halibut Condition GUEST');
        // Check new page is entered
        cy.url().should('include', 'TM01');
        cy.get('h1').should('have.text', 'Termination of a director');
        directorsAndSecretaries.applyDateOfTermination().confirmTermination();
        // Submission would happen at this stage
    });
});
