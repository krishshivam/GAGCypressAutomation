describe('Launched the pre-prod website', () => {
  it('passes', () => {
    cy.viewport(1536, 824);
    cy.visit('https://preprod.grandiose.ae/');

    // Handle uncaught exceptions to prevent test failure
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err);
      return false; // prevents the test from failing on uncaught exceptions
    });
    // Interact with the Emirate selection dropdown
    cy.get('select[name="home_delivery_mode_emirates"]', { timeout: 1000 })
      .should('be.visible')
      .select('Dubai');
    cy.get('select[name="home_delivery_mode_emirates"]')
      .should('have.value', '656'); // Ensure the value corresponds to Dubai
    cy.get('select[name="home_delivery_mode_emirates"] option:selected')
      .should('contain', 'Dubai'); // Confirm Dubai is visible

    // Click the dropdown to make it visible
    cy.get('.chosen-container').click();

    cy.get('.chosen-search > input')
      .click({ force: true })
      .type('Jumeirah 2', { force: true });

    /// Select only if it's not already selected
    cy.get('.chosen-results li')
      .contains('Jumeirah 2')
      .then(($option) => {
        if (!$option.hasClass('result-selected')) {
          cy.wrap($option).click();
        }
        cy.get('.confirm-delivery-mode')
          .click();
      });
  });
});
