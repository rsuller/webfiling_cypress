"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    changeAddress(propertyNumber, postcode) {
        cy.get('#ro-address-premise').type(propertyNumber);
        cy.get('#ro-address-postcode').type(postcode);
        // Lookup address
        cy.get('#ro-address-postcode-Lookup').click();
    }
    checkAddressByStreetName(streetName) {
        cy.get("input[id='ro-address-street']").should('have.value', streetName);
        return this;
    }
    checkAddressByTown(town) {
        cy.get("input[id='ro-address-postTown']").should('have.value', town);
        return this;
    }
    checkCountryValue(country) {
        cy.get("#countryList").should('have.value', country);
        return this;
    }
}
exports.default = Address;
