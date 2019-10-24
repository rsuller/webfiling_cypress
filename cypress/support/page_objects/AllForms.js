import CompanySignIn from "./CompanySignIn";

class AllForms extends CompanySignIn {

    selectDirectorAndSecretaries() {
        cy.contains('Directors and secretaries').click();
        return this;
    }

    selectTM01() {
        cy.contains('Termination of appointment of director - TM01').click();   
    }

    selectCH01() {
        cy.contains('Change of director\'s details - CH01').click();  
    }
}

export default AllForms