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

    selectOfficerToRemove(officerName: string) {
        // This will select the Remove link of the named officer
        this.selectOfficer('tbody  tr td:nth-child(5)  a', officerName);
    }

    selectOfficerToEdit(officerName: string) {
        // This will select the Edit link of the named officer
        this.selectOfficer('tbody  tr td:nth-child(4)  a', officerName);
    }

    selectOfficer(elementId: string, officerName: string) {
        cy.get(elementId).each(($el: JQuery<HTMLElement>) => {
            const text = $el.text();
            cy.log(text);
            if (text.includes(officerName)) {
                cy.wrap($el).should('contain.text', officerName).click();
            }
        })
    }

    confirmTermination() {
        cy.get('#confirm-officer-resignation').check();
    }

}

export default DirectorsAndSecretaries