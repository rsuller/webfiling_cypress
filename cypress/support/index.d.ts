// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
      */
      dataCy(value: string): Chainable<Element>

      /**
       * Custom command for signing into Service
       */
      signIntoWebfiling(): Chainable<Element>

      /**
       * Custom command for locating hidden labels
       * 
       * @param elementId element id to be used in cy.get(elementId)
       * @param text text to match hidden label
       */
      checkForHiddenLabel(elementId: string, text: string): Chainable<Element>

      /**
       * Custom command to select today's date
       */
      selectTodaysDate(): Chainable<Element>

      /**
       * Custom command to check submit button is disabled
       */
      checkSubmitIsDisabled(): Chainable<Element>

    }
  }