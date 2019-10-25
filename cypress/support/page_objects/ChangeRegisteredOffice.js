"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Address_1 = require("../Address");
class ChangeRegisteredOffice extends Address_1.default {
    confirmChangeOfAddress() {
        cy.get('.container-button > div > .button').click();
    }
}
exports.default = ChangeRegisteredOffice;
