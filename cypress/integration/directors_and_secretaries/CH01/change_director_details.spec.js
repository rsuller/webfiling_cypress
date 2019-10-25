"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanySignIn_1 = require("../../../support/page_objects/CompanySignIn");
const CompanyOverview_1 = require("../../../support/page_objects/CompanyOverview");
const AllForms_1 = require("../../../support/page_objects/AllForms");
const DirectorsAndSecretaries_1 = require("../../../support/page_objects/DirectorsAndSecretaries");
const DirectorChangeDetailsPreFiling_1 = require("../../../support/page_objects/DirectorChangeDetailsPreFiling");
beforeEach(() => {
    // Sign into Webfiling
    cy.signIntoWebfiling();
    // Sign into company to file for
    const companySignIn = new CompanySignIn_1.default();
    companySignIn.enterCompanyDetails('00006400', '222222');
});
describe('test', () => {
    it('No change', () => {
        const companyOverview = new CompanyOverview_1.default();
        const allForms = new AllForms_1.default();
        const directorAndSecretaries = new DirectorsAndSecretaries_1.default();
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectDirectorAndSecretaries()
            .selectCH01();
        // Select officer by name
        directorAndSecretaries.selectOfficerToEdit('Halibut Condition GUEST');
        // Check to ensure Tick and Cross are displayed
        const preFiling = new DirectorChangeDetailsPreFiling_1.default();
        preFiling.checkPageIsDisplayedCorrectly();
        // Make a change to the selected officer
        preFiling.changeExistingOfficerDetails();
        // Apply today's date for date of change
        cy.selectTodaysDate();
        // As no change has been made ensure the submission button is disabled
        cy.checkSubmitIsDisabled();
    });
});
