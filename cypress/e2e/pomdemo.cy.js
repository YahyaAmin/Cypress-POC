import {LoginPage} from './Pages/login_page'

const loginPage = new LoginPage()

it('pomdemo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    loginPage.enterUsername("Admin")
    loginPage.enterPassword("admin123")
    loginPage.clickLogin()

})