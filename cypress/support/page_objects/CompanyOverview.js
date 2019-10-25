"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompanyOverview {
    selectAllForms() {
        cy.get('#tabFormListing').click();
        return this;
    }
    selectLinkWithText(linkText) {
        cy.contains(linkText).click();
        return this;
    }
}
exports.default = CompanyOverview;
