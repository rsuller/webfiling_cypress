/// <reference types="Cypress" />

class SubmissionConfirmation {

    confirmHeadingContains(text: string) {
        cy.get('h1').should('have.text', text);
    }

}

export default SubmissionConfirmation