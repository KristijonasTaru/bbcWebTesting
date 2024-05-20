import { mainFunctionLocators } from "./main-function/main-function-locators";

export default class MainFunctions {
  static clickLink(locator, itemName) {
    cy.get(locator, { timeout: 5000 }).contains(itemName).click();
  }
  static assertURL(expectedUrlPart) {
    cy.url().should("include", expectedUrlPart);
  }

  static assertTitle(expectedTitle) {
    cy.title().should("include", expectedTitle);
  }

  static acceptCookies() {
    cy.wait(2000);
    cy.get(mainFunctionLocators.BBC_BODY).then(($body) => {
      if ($body.find(mainFunctionLocators.IFRAME).is(":visible")) {
        cy.get(mainFunctionLocators.IFRAME).then(($iframe) => {
          cy.wrap($iframe)
            .its(mainFunctionLocators.IFRAME_BODY)
            .find(mainFunctionLocators.IFRAME_AGREE_BUTTON)
            .click({ force: true });
        });
      }
    });
  }

  static closePopUpWindow() {
    cy.get(mainFunctionLocators.BBC_BODY, { timeout: 5000 }).then(($body) => {
      if (
        $body.find(mainFunctionLocators.SIGN_TO_BBC_CLOSE_BUTTON).is(":visible")
      ) {
        cy.get(mainFunctionLocators.SIGN_TO_BBC_CLOSE_BUTTON).click();
      }
    });
  }

  static beforeEachRoutine() {
    cy.visit("/");
    this.acceptCookies();
    cy.get(mainFunctionLocators.MAIN_PAGE_HEADER).should("exist");
    cy.get(mainFunctionLocators.BODY_COOKIES_AGREE).click();
  }

  static bbcHomePageCorrectlyLoaded() {
    cy.intercept("GET", "https://www.bbc.com/").as("bbc");
    cy.visit("/");
    cy.wait("@bbc").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.title().should("include", "BBC Home");
  }

  static signInToBbc() {
    cy.fixture("credentials.json").then((credentials) => {
      cy.get(mainFunctionLocators.SIGN_IN_EMAIL).type(credentials.env.email);
      cy.wait(1000);
      cy.get(mainFunctionLocators.SIGN_IN_CONTINUE).click();
      cy.get(mainFunctionLocators.SIGN_IN_PASSWORD).type(
        credentials.env.password
      );
      cy.wait(1000);
      cy.get(mainFunctionLocators.SIGN_IN_CONTINUE).click();
      cy.get(mainFunctionLocators.BBC_ACCOUNT_ICON, { timeout: 5000 }).should(
        "be.visible"
      );
    });
  }
}
