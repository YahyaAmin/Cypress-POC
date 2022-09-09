
it('Read files using fixtures', function()
{
    cy.fixtures('example.json').then((data) => {
            cy.log(data.name)
            cy.log(data.email)
    })
})