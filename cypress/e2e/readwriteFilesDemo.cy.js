/// <reference types = "cypress"/>

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
    //for json files can use its => .its('name').should('eq','data)
})
})


it('Write file demo', function() {
    cy.writeFile('sample.txt', 'I am Yahya')  
    //if file doesn't exist, then it will be created on root directory

    cy.writeFile('sample.txt', '\nAvoid overwriting example', {flag:'a+'})  
    //add a flag to avoid overwriting existing content in sample.txt

})

