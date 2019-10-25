import CompanySignIn from '../../../support/page_objects/CompanySignIn'
import CompanyOverview from '../../../support/page_objects/CompanyOverview'
import AllForms from '../../../support/page_objects/AllForms'
import DirectorAndSecretaries from '../../../support/page_objects/DirectorsAndSecretaries'
import DirectorChangeDetailsPreFiling from '../../../support/page_objects/DirectorChangeDetailsPreFiling'

beforeEach(()=> {
    // Sign into Webfiling
    cy.signIntoWebfiling();

    // Sign into company to file for
    const companySignIn = new CompanySignIn();
    companySignIn.enterCompanyDetails('00006400', '222222'); 
}) 

describe('test', ()=> {
    it('No change', ()=> {
        const companyOverview = new CompanyOverview();
        const allForms = new AllForms();
        const directorAndSecretaries = new DirectorAndSecretaries();
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectDirectorAndSecretaries()
        .selectCH01();

        // Select officer by name
        directorAndSecretaries.selectOfficerToEdit('Halibut Condition GUEST');

        // Check to ensure Tick and Cross are displayed
        const preFiling = new DirectorChangeDetailsPreFiling();
        preFiling.checkPageIsDisplayedCorrectly();

        // Make a change to the selected officer
        preFiling.changeExistingOfficerDetails();

        // Apply today's date for date of change
        cy.selectTodaysDate();

        // As no change has been made ensure the submission button is disabled
        cy.checkSubmitIsDisabled();
    })
})