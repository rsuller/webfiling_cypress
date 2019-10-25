"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Address_1 = require("../Address");
class NotificationOfSAIL extends Address_1.default {
    updateAddress() {
        cy.get('#company-address-container-continue').click();
    }
}
exports.default = NotificationOfSAIL;
