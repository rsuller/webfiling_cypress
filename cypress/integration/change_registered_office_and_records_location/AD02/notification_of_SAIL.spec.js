"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanySignIn_1 = require("../../../support/page_objects/CompanySignIn");
const CompanyOverview_1 = require("../../../support/page_objects/CompanyOverview");
const NotificationOfSAIL_1 = require("../../../support/page_objects/NotificationOfSAIL");
const AllForms_1 = require("../../../support/page_objects/AllForms");
beforeEach(() => {
    // Sign into Webfiling
    cy.signIntoWebfiling();
    // Sign into company to file for
    const companySignIn = new CompanySignIn_1.default();
    companySignIn.enterCompanyDetails('00006400', '222222');
});
describe('Complete AD02 submission', () => {
    it('Successful submission of SAIL', () => {
        // Select AD02
        const companyOverview = new CompanyOverview_1.default();
        const allForms = new AllForms_1.default();
        companyOverview.selectAllForms().selectLinkWithText('Change registered office and location of company records')
            .selectLinkWithText('Notification of single alternative inspection location (SAIL) - AD02');
        const notification = new NotificationOfSAIL_1.default();
        notification.changeAddress('100', 'SW1P 1JP');
        // Validate address
        notification.checkAddressByStreetName('ROCHESTER ROW')
            .checkAddressByTown('LONDON')
            .checkCountryValue('GB-ENG')
            .updateAddress();
        // Check there is no location of registers
        cy.get('#sail-registers-container-section > p.answer > .answer')
            .should('have.text', 'No registers currently located at SAIL address');
    });
});
