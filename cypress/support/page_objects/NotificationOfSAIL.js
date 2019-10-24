import Address from "../Address";

class NotificationOfSAIL extends Address {

    updateAddress() {
        cy.get('#company-address-container-continue').click();
    }

}

export default NotificationOfSAIL