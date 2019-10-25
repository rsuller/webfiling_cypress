import CompanyOverview from '@page-objects/CompanyOverview'
import CompanySignIn from '@page-objects/CompanySignIn'
import AllForms from '@page-objects/AllForms'
import DirectorsAndSecretaries from '@page-objects/DirectorsAndSecretaries'

beforeEach(()=> {
    // Sign into Webfiling
    cy.signIntoWebfiling();

    // Sign into company to file for
    const companySignIn = new CompanySignIn();
    companySignIn.enterCompanyDetails('00006400', '222222'); 
}) 

describe('Change of registered office address', () => {
    it('File successful TM01', () => {
        const companyOverview = new CompanyOverview();
        const allForms = new AllForms();
        const directorsAndSecretaries = new DirectorsAndSecretaries();

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

    })

})