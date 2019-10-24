/// <reference types="Cypress" />

import Address from "../Address";

class ChangeRegisteredOffice extends Address {

    confirmChangeOfAddress() {
        cy.get('.container-button > div > .button').click()
    }

}

export default ChangeRegisteredOffice