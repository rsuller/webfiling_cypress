import CompanySignIn from '@page-objects/CompanySignIn'
import CompanyOverview from '@page-objects/CompanyOverview'
import NotificationOfSAIL from '@page-objects/NotificationOfSAIL'
import AllForms from '@page-objects/AllForms'

beforeEach(()=> {
    // Sign into Webfiling
    cy.signIntoWebfiling();

    // Sign into company to file for
    const companySignIn = new CompanySignIn();
    companySignIn.enterCompanyDetails('00006400', '222222'); 
}) 

describe('Complete AD02 submission', ()=> {
    it('Successful submission of SAIL', ()=> {
        // Select AD02
        const companyOverview = new CompanyOverview();
        const allForms = new AllForms();

        companyOverview.selectAllForms().selectLinkWithText('Change registered office and location of company records')
        .selectLinkWithText('Notification of single alternative inspection location (SAIL) - AD02');

        const notification = new NotificationOfSAIL();
        notification.changeAddress('100', 'SW1P 1JP');

        // Validate address
        notification.checkAddressByStreetName('ROCHESTER ROW')
        .checkAddressByTown('LONDON')
        .checkCountryValue('GB-ENG')
        .updateAddress();



        // Check there is no location of registers
        cy.get('#sail-registers-container-section > p.answer > .answer')
        .should('have.text', 'No registers currently located at SAIL address')

    })
})