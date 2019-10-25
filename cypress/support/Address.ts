class Address {

    changeAddress(propertyNumber: string, postcode: string) {
        cy.get('#ro-address-premise').type(propertyNumber)
        cy.get('#ro-address-postcode').type(postcode)
        // Lookup address
        cy.get('#ro-address-postcode-Lookup').click()
    }

    checkAddressByStreetName(streetName: string) {
        cy.get("input[id='ro-address-street']").should('have.value', streetName)
       return this;
    }

    checkAddressByTown(town: string) {
        cy.get("input[id='ro-address-postTown']").should('have.value', town)
        return this;
    }

    checkCountryValue(country: string) {
        cy.get("#countryList").should('have.value', country)
        return this;
    }

}

export default Address