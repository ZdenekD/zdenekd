/// <reference types="Cypress" />
import data from '../../../src/data/pages';

describe('Page - Contact', () => {
    const {
        link,
        title,
        heading
    } = data.contact;

    beforeEach(() => {
        cy.visit(link);
    });

    it('Load properly with title', () => {
        cy.title().should('include', title);
    });

    it('Load heading properly', () => {
        cy.get('[data-test="component-heading"]').should('contain', heading);
    });

    it('Open and close menu', () => {
        cy.get('[aria-label="Menu"]')
            .click()
            .wait(2000)
            .closest('[data-test="component-app"]')
            .find('[data-test="component-aside"]')
            .should('have.css', 'opacity', '1')
            .closest('[data-test="component-app"]')
            .find('[aria-label="Menu"]')
            .click()
            .wait(2000)
            .closest('[data-test="component-app"]')
            .find('[data-test="component-aside"]')
            .should('have.css', 'opacity', '0')
    });
});
