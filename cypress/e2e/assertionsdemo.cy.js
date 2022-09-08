
it('Assertions Demo', () => {
    cy.visit('https://example.cypress.io')
    //cy.contains("Querying").click()
    cy.contains("get").click()
    cy.get('#query-btn')
      .should('contain', 'Button')
      .should('have.class', 'query-btn')
      .and('be.visible')       //and will be the same as the assertion above
      .should('be.enabled')


    expect(true).to.be.true 
    //expect(name).to.be.equal('name')  

    assert.equal(5, 5, "Not Equal")
    assert.strictEqual(4, '4', "Data type not equal")

  })