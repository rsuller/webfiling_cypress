class DirectorsAndSecretaries {

    checkTableContents() {
        // Check to ensure the labels are present and correct
        cy.get('.name').should('have.text', 'Name');
        cy.get('.role').should('have.text', 'Role');
        cy.get('.dob').should('have.text', 'Date of birth');
        
        // Check hidden columns
        cy.checkForHiddenLabel('thead > :nth-child(2) > :nth-child(4)', 'Edit Links');
        cy.checkForHiddenLabel('thead > :nth-child(2) > :nth-child(5)', 'Remove Links');
    }

    selectOfficerToRemove(officerName) {
        cy.get('tbody  tr td:nth-child(5)  a').as('RemoveLinks');
        // This will select the Remove link of the named officer
        this.selectOfficer('@RemoveLinks', officerName);
    }

    selectOfficerToEdit(officerName) {
        cy.get('tbody  tr td:nth-child(4)  a').as('EditLinks');
        // This will select the Edit link of the named officer
        this.selectOfficer('@EditLinks', officerName);
    }

    selectOfficer(alias, officerName) {
        cy.get(alias).each((element) => {
            cy.get(element).invoke('text').then((text) => {
                cy.log(text);
                if(text.includes(officerName)) {
                    cy.log('Found the named officer.');
                    cy.wrap(element).should('contain.text', officerName).click();
                }
            })

        })

    }

    applyDateOfTermination() {
        // Apply today's date for date of change
        const day = Cypress.moment().format('DD');
        const month = Cypress.moment().format('MMMM');
        const year = Cypress.moment().format('YYYY');

        cy.log(Cypress.moment().format('Do MMMM YYYY'))

        cy.get('#day-select-1').select(day);
        cy.get('#month-select-1').select(month);
        cy.get('#year-select-1').select(year);
        return this;
    }

    confirmTermination() {
        cy.get('#confirm-officer-resignation').check();
    }

}

export default DirectorsAndSecretaries