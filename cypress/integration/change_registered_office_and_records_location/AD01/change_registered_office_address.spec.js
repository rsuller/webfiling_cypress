"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyOverview_1 = require("../../../support/page_objects/CompanyOverview");
const CompanySignIn_1 = require("../../../support/page_objects/CompanySignIn");
const ChangeRegisteredOffice_1 = require("../../../support/page_objects/ChangeRegisteredOffice");
const SubmissionConfirmation_1 = require("../../../support/page_objects/SubmissionConfirmation");
beforeEach(() => {
    // Sign into Webfiling
    cy.signIntoWebfiling();
    // Sign into company to file for
    const companySignIn = new CompanySignIn_1.default();
    companySignIn.enterCompanyDetails('00006400', '222222');
});
describe('Change of registered office address', () => {
    it('File successful AD01', () => {
        // Go to change registered office address
        const companyOverview = new CompanyOverview_1.default();
        const changeRegisteredOffice = new ChangeRegisteredOffice_1.default();
        const submissionConfirmation = new SubmissionConfirmation_1.default();
        companyOverview.selectLinkWithText('Change address');
        // Alter address - just change premise
        changeRegisteredOffice.changeAddress('100', 'SW1P 1JP');
        // Check address is correct
        changeRegisteredOffice.checkAddressByStreetName('ROCHESTER ROW')
            .checkAddressByTown('LONDON')
            .checkCountryValue('GB-ENG')
            .confirmChangeOfAddress();
        // Confirm submission
        submissionConfirmation.confirmHeadingContains('Confirmation of Submission');
    });
});
