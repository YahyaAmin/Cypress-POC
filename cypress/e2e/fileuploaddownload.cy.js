/// <reference types = "cypress"/>
/// <reference types="cypress-downloadfile"/>

it('File upload demo', function() {
    cy.visit('https://trytestingthis.netlify.app/');    

    cy.get('#myfile').attachFile('UploadFile.txt')
    //for files inside fixtures, no need to mention path

})

it('File Download demo', function()  {
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
    //creates a folder named mydownloads in project folder and downloads example.jpg
})