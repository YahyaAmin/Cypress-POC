export class LoginPage {
  Loginpage_username_textbox = "input[placeholder='Username']";
  LoginPage_password_textbox = "input[placeholder='Password']";
  LoginPage_submit_button = ".oxd-button";

  enterUsername(username) {
    cy.get(this.Loginpage_username_textbox).type(username);
  }

  enterPassword(password) {
    cy.get(this.LoginPage_password_textbox).type(password);
  }

  clickLogin() {
    cy.get(this.LoginPage_submit_button).click();
  }
}
