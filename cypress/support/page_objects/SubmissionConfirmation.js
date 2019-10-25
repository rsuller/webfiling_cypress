"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubmissionConfirmation {
    confirmHeadingContains(text) {
        cy.get('h1').should('have.text', text);
    }
}
exports.default = SubmissionConfirmation;
