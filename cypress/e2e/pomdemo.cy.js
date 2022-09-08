import { LoginPage } from "./Pages/login_page";

const loginPage = new LoginPage();

describe("All Login Tests", () => {
  //keywords for grouped tests       it.only, it.skip  BeforeEach(can be placed insider or outside describe block)
  //for running "before each" for all spec files, put it in e2e.js file 

  beforeEach(function () {
    cy.log("Running Login Tests")
    cy.visit("https://opensource-demo.orangehrmlive.com");
  });

  it("Login Test 1", () => {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    cy.get(".oxd-userdropdown-name").click();
  });

  it("Login Test 2", () => {
    loginPage.enterUsername("WrongAdmin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    cy.get(".oxd-userdropdown-name").click();
  });
});

