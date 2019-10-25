"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanySignIn_1 = require("./CompanySignIn");
class AllForms extends CompanySignIn_1.default {
    selectDirectorAndSecretaries() {
        cy.contains('Directors and secretaries').click();
        return this;
    }
    selectTM01() {
        cy.contains('Termination of appointment of director - TM01').click();
    }
    selectCH01() {
        cy.contains('Change of director\'s details - CH01').click();
    }
}
exports.default = AllForms;
