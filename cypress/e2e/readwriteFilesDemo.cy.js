before(function(){
    cy.fixture('example.json').as('test_data') //to use data as a variable 
})


it('Read files using fixtures', function()
{
    cy.fixture('example.json').then((data) => {
            cy.log(data.name)
            cy.log(data.email)
    })

    cy.log(this.test_data.name) //to use data as a variable

})

it('read file using ReadFile()', function() {
    cy.readFile('cypress/fixtures/example.json').then((data) => {
    cy.log(data.name)
})
})