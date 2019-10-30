import CompanyOverview from '@page-objects/CompanyOverview'
import CompanySignIn from '@page-objects/CompanySignIn'
import ChangeRegisteredOffice from '@page-objects/ChangeRegisteredOffice'
import SubmissionConfirmation from '@page-objects/SubmissionConfirmation'

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

        // First accessibility call
        cy.checkA11y();

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