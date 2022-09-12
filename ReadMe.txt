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
Lecture 2
=======================================================================

What is Page Object Model
a design principle
keep the objects & methods separate from test script
efficient reusability
easier, efficient and faster changes & maintenance

Step 1 : Create a login test
Step 2 : Create a file and add a class for the page
export class LoginPage{

}

Step 3 : Add objects and functions in the class
Step 4 : Import the class in the test spec
import {LoginPage} from "../pages/login_page"

Step 5 : Create object of the class
const loginPage = new LoginPage()

Step 6 : call the class functions
 loginPage.enterUsername('test')

App Actions
What are App Actions
How is it different from Page Objects
Shortcuts in app
provide users with quick ways to navigate to specific activities in app
change the state of your app without user interactions (GUI)

How to Group tests in Cypress

Step 1 : In the test file add 2 it blocks for login test and run
Step 2 : Have a login test with valid and invalid credentials
Step 3 : Group all tests (it blocks) in a describe block

describe()
.only
.skip
beforeEach block
within describe - Runs before each test in that describe group
outside describe - Runs before each test in that spec file

======================================================================
Lecture 3
======================================================================
Step 1 - Open terminal and run command 
npx cypress run
npx cypress run --help
--spec or -s
--browser or -b
--headless

Step 2 - Open package.json file 
Step 3 - Add under scripts section
Every line under this section can be run with npm run command

 "scripts": {
    "test": "echo \" Hello World\"",
    "log" : "echo Hello",
    "cy-test" : "cypress run"
  }

npm run cy-test

Step 4 - Can set configurations from command line

Syntax:  cypress run --config configValues
cypress run --config pageLoadTimeout=100000,watchForFileChanges=false

Cypress Commands

cypress run   Runs cypress tests from CLI
cypress open  Opens Cypress App
cypress verify  Verifies Cypress is installed correctly and is executable
cypress version  Prints Cypress version
cypress info   Prints information about Cypress and current Env
cypress cache  Prints info about global Cypress cache

What is package.json
Every Node.js project has package.json file located in the root folder
Information about NodeJS project
List of dependencies with version
How to create :
npm init
npm init --y

devDependencies - used during dev or build phase
npm install - installs both dev and normal dependencies
npm install --dev - installs only dev dependencies
npm install --prod - will not include dev dependencies
~1.2.3 will match all 1.2.x versions but will miss 1.3.0
^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0

Package.json
records the minimum version needed (with ^ and ~)
is used for more than dependencies -like defining project info, description, author & license, scripts, etc

Package-lock.json
records the exact version of each installed package which allows you to re-install them
locks the dependencies with the installed version

Difference between tilde (~) and caret (^) in package.json

On npm install get the latest minor or patch version of the dependency mentioned in package.json

^ install the latest minor version - 1.x.x
tells npm that if someone clones the project and runs npm install then install the latest minor version of the package in his node_modules

~ install the latest patch version - 1.2.x
tells npm that if someone clones the project and runs npm install then install the latest patch version of the package in his node_modules

~1.2.3 will match all 1.2.x versions but will miss 1.3.0
^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0

How to Read and Write files in Cypress
Read files using fixture()
Read files using readFile()
Write files using writeFile()

Read files using fixture()

Step 1 - Create a new test spec file
Step 2 - Add a file under fixtures folder
Step 3 - Create a test and add command
Step 4 - To use data from file in all tests create a before function
Step 5 - Now use data from file in tests

Notes
If the file is in fixture folder it can be referenced directly by name without extension
For a JSON file its function can be used to access the values using keys
cy.fixture("filename").its('name').should('eq', 'hello')

Read files using readFile()
Step 1 - Create a new test in spec file
Step 2 - Test commands
Step 3 - Use cy.readFile() function

For JSON files can use its  -  .its('name').should('eq',  ‘ data ‘)

Write files using writeFile()
Step 1 - Create a new test in spec file
Step 2 - Test commands
    cy.writeFile('sample.txt', 'Hello l am learning Cypress\n')
          cy.writeFile('sample.txt', 'Hello I am Raghav', { flag: 'a+' })

Relative file paths can be used
cy.writeFile('./cypress/fixtures/files/sample.txt','Hell World’')

===========================================================================
Lecture 4
=======================================================================
File upload in cypress
SETUP
Step 1 : Install plugin cypress-file-upload
npm install --save-dev cypress-file-upload

Step 2 : If you are using TypeScript, ensure your tsconfig.json contains
"compilerOptions": {
  "types": ["cypress", "cypress-file-upload"]  }

Step 3 : Add to cypress/support/commands.js
import 'cypress-file-upload';

Step 4 :  Check this commands.js is imported in cypress/support/index.js 
(it might be commented)
// Import commands.js using ES2015 syntax:
import './commands';

TEST
Step 1 : Create a new test
Step 2 : Add command to visit the web page
cy.visit(' ... ')
Step 3 : Add command to upload file
cy.get('[name="myfile"]').attachFile(' filePath ');

File download in cypress
SETUP
Step 1 : Install plugin cypress-downloadfile
npm install cypress-downloadfile

Step 2 : Add to cypress/support/commands.js
require('cypress-downloadfile/lib/downloadFileCommand')

Step 3 : Add to cypress/plugins/index.js

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = (on, config) =＞ {
  on('task', {downloadFile}) }

TEST
Step 1 : Create a new test

Step 2 : If autocomplete does not work add at the top
/// ＜reference types="cypress-downloadfile"/＞

Step 3 : Add command to download file
cy.downloadFile('https://filepath/demo.txt,  'mydownloads' ,'demo.txt')

===========================================================================
Lecture: Reporting in Cypress
=========================================================================

1. How to install mochawesome reporter
2. How to configure the reporter
3. How to merge multiple JSON report files
4. How to generate a single HTML report
5. Troubleshooting issues like
Unexpected token � in JSON at position 0
Unexpected end of JSON input
6. Run reports command automatically using
    pretest and posttest scripts in package.json

Step 1 - Install mochawesome library

npm install mochawesome --save-dev

Step 2 - Install mochawesome-merge library

npm install mochawesome-merge --save-dev

Step 3 - Add reports configuration in cypress.json

{
 "reporter": "mochawesome",
 "reporterOptions": {
   "charts": true,
   "overwrite": false,
   "html": false,
   "json": true,
   "reportDir": "cypress/report/mochawesome-report"
  }
 }

Step 4 - Run command to execute tests

npx cypress run --reporter mochawesome

Step 5 - Run command to merge multiple json reports into one

npx mochawesome-merge cypress/report/mochawesome-report/*.json ＞ cypress/report/output.json

npx mochawesome-merge cypress/report/mochawesome-report/*.json | out-file -encoding ascii cypress/report/output.json

Step 6 - Run command to generate html report

npx marge cypress/report/output.json --reportDir ./ --inline

Add report generation commands
in package.json scripts
pretest
test
posttest