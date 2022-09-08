it('Assertions Demo', () => {
    cy.visit('https://example.cypress.io')
    //cy.contains("Querying").click()
    cy.contains("get").click()
    cy.get('#query-btn').should('contain', 'Button')

  })