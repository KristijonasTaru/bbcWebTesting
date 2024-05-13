class MainFunctions {
  clickLink(locator, itemName) {
    cy.get(locator, { timeout: 5000 }).contains(itemName).click();
  }
  assertURL(expectedUrlPart) {
    cy.url().should("include", expectedUrlPart);
  }

  assertTitle(expectedTitle) {
    cy.title().should("include", expectedTitle);
  }

  acceptCookies() {
    cy.get('iframe[title="SP Consent Message"]').then(($iframe) => {
      cy.wrap($iframe)
        .its("0.contentDocument.body")
        .find('button[aria-label="I agree"]')
        .click({ force: true });
    });
  }

  registerPopUp() {
    cy.get(".app", { timeout: 5000 }).then(($body) => {
      if ($body.find("#close1").is(":visible")) {
        cy.get("#close1").click();
      }
    });
  }

  beforeEachRoutine() {
    cy.visit("/");
    this.acceptCookies();
    cy.get("header").should("exist");
    cy.get("#bbccookies-continue-button > span").click();
  }

  signInToBbc() {
    cy.fixture("credentials.json").then((credentials) => {
      cy.get("input[type='email']").type(credentials.env.email);
      cy.wait(1000);
      cy.get("#submit-button").click();
      cy.get('[data-testid="input"]').type(credentials.env.password);
      cy.wait(1000);
      cy.get("#submit-button").click();
      cy.get('svg[icon="your-account"]', { timeout: 5000 }).should(
        "be.visible"
      );
    });
  }

  videoHandler(locator) {
    cy.get(locator, { timeout: 5000, includeShadowDom: true }).click({
      force: true,
    });
  }
}

export default MainFunctions;
