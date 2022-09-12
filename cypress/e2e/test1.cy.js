it("Google Search", function () {
  cy.visit("https://google.com");
  cy.get(".gLFyf").type("abcdefgh{Enter}"); //For pressing a key

  //cy.contains("Google Search").click()  FOR CLICKING SEARCH
});
