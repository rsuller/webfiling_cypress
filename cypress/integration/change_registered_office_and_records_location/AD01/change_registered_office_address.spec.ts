/// <reference types="Cypress" />
/// <reference path="../../../support/index.d.ts" />

import CompanyOverview from '../../../support/page_objects/CompanyOverview'
import CompanySignIn from '../../../support/page_objects/CompanySignIn'
import ChangeRegisteredOffice from '../../../support/page_objects/ChangeRegisteredOffice'
import SubmissionConfirmation from '../../../support/page_objects/SubmissionConfirmation'

beforeEach(()=> {
    // Sign into Webfiling
    cy.signIntoWebfiling();

    // Sign into company to file for
    const companySignIn = new CompanySignIn();
    companySignIn.enterCompanyDetails('00006400', '222222'); 
}) 

describe('Change of registered office address', () => {
    it('File successful AD01', () => {
        // Go to change registered office address
        const companyOverview = new CompanyOverview();
        const changeRegisteredOffice = new ChangeRegisteredOffice();
        const submissionConfirmation = new SubmissionConfirmation();

        companyOverview.selectLinkWithText('Change address');

        // Alter address - just change premise
        changeRegisteredOffice.changeAddress('100', 'SW1P 1JP');
        
        // Check address is correct
        changeRegisteredOffice.checkAddressByStreetName('ROCHESTER ROW')
        .checkAddressByTown('LONDON')
        .checkCountryValue('GB-ENG')
        .confirmChangeOfAddress();
        
        // Confirm submission
        submissionConfirmation.confirmHeadingContains('Confirmation of Submission')
    })

})