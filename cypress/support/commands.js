"use strict";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// cypress/support/index.js
Cypress.Commands.add('signIntoWebfiling', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.get('#email').type(Cypress.env('user_email'));
    cy.get('#seccode').type(Cypress.env('user_password'));
    cy.get('.button').click();
});
Cypress.Commands.add('checkForHiddenLabel', ($el, text) => {
    cy.get($el).should('have.text', text);
    cy.get($el).should((element) => {
        expect(element).to.have.prop('hidden');
    });
});
Cypress.Commands.add('signInToWebfiling', () => {
    cy.get('#signin_email').type(Cypress.env('user_email'))
        .get('#password').type(Cypress.env('user_password'))
        .get('#submit').click();
});
Cypress.Commands.add('selectTodaysDate', () => {
    const day = Cypress.moment().format('DD');
    const month = Cypress.moment().format('MMMM');
    const year = Cypress.moment().format('YYYY');
    cy.log(Cypress.moment().format('Do MMMM YYYY'));
    cy.get('#day-select-1').select(day);
    cy.get('#month-select-1').select(month);
    cy.get('#year-select-1').select(year);
});
Cypress.Commands.add('checkSubmitIsDisabled', () => {
    cy.get('.submit').should('have.attr', 'disabled');
});
