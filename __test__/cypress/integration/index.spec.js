/// <reference types="Cypress" />
import data from '../../../src/data/pages';

describe('Page - Homepage', () => {
    const {
        link,
        title,
        heading
    } = data.homepage;

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
        cy.get('[data-test="component-menu"]')
            .click()
            .wait(2000)
            .closest('[data-test="component-app"]')
            .find('[data-test="component-aside"]')
            .should('have.css', 'opacity', '1')
            .closest('[data-test="component-app"]')
            .find('[data-test="component-menu"]')
            .click()
            .wait(2000)
            .closest('[data-test="component-app"]')
            .find('[data-test="component-aside"]')
            .should('have.css', 'opacity', '0')
    });
});
