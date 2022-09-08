Lecture 1

=============================================================================

IDE - Visual Studio Code

Cypress Project Setup

Step 1 - Install Node.js
Step 2 - Install Visual Studio Code
Step 3 - Create a new folder for Cypress project
Step 4 - Open the folder in VS Code
Step 5 - Open VS Code terminal & run command  npm init -y
Step 6 - Install Cypress
npm install cypress
npx cypress -v
npx cypress verify

Step 7 - Open Cypress
npx cypress open

Cypress 1st Test

Step 1 - Create a file under cypress folder
Step 2 - At the top mention
/// ＜reference types="cypress" /＞

Step 3 - Write test function
Step 4 - Run test
npx cypress open

See what happens when you make any changes & save
Add in Config file
 "watchForFileChanges": false
cypress.json  - ver before 10
cypress.config.js  -for ver 10+

Commands we learned:
cy.visit()     cy.visit(‘https://google.com/’)
cy.get()      cy.get(‘.class’)
type()        cy.get(‘.class’).type(‘1234’)
click()        cy.get(‘.class’).click()

How to access elements:
Step 1 - Run test
Step 2 - On the browser - App Preview - click Selector Playground
Step 3 - Copy the cy.get command and paste in the test script
Step 4 - Add custom timeouts - command level
  cy.get('.className, {timeout:5000}).type('123{enter}')
Step 5 - Add custom timeouts - global level- cypress.json
     "defaultCommandTimeout": 10000
Step 6 - Access element with text
     cy.contains('Videos').click()
we learned

ways to access and interact with elements
adding custom timeouts - command level
adding custom timeouts - global level

cy.contains()       cy.contains('Videos').click()
cy.wait()          cy.wait(5000)

================================================================================================