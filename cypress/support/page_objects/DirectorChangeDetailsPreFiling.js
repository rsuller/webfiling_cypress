class DirectorChangeDetailsPreFiling {

    checkPageIsDisplayedCorrectly() {
        cy.get('.tick').should('not.be.hidden');
        cy.get('.cross').should('not.be.hidden');
    }

    changeExistingOfficerDetails() {
        cy.get('#ch01-prescreen-start').click();
    }

}

export default DirectorChangeDetailsPreFiling