/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/Main_Functions";
import { homeLocators } from "../../support/pageObject/locators/bbc-home-navigation-locators/home-navigation-locators";

describe("Verify that the informational navigation links in the footer load the correct pages.", () => {
  const mainFunctions = new MainFunctions();
  beforeEach(() => {
    mainFunctions.beforeEachRoutine();
  });

  it("Verify that footer informative link Terms of Use in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "Terms of Use"
    );
    mainFunctions.assertURL("/usingthebbc/terms");
  });

  it("Verify that footer informative link About the BBC in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "About the BBC"
    );
    mainFunctions.assertURL("/aboutthebbc");
  });

  it("Verify that footer informative link Privacy Policy in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "Privacy Policy"
    );
    mainFunctions.assertURL("/usingthebbc/privacy");
  });

  it("Verify that footer informative link Cookies in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_INFORMATIVE, "Cookies");
    mainFunctions.assertURL("usingthebbc/cookies");
  });

  it("Verify that footer informative link Accessibility Help in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "Accessibility Help"
    );
    mainFunctions.assertURL("/accessibility/");
  });

  it("Verify that footer informative link Contact the BBC in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "Contact the BBC"
    );
    mainFunctions.assertURL("/contact");
  });

  it("Verify that footer informative link Advertise with us Help in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "Advertise with us"
    );
    mainFunctions.assertURL("/advertisingcontact");
  });

  it("Verify that footer informative link Do not share or sell my info in the footer bar load the correct pages.", () => {
    cy.get(homeLocators.LINKS_FOOTER_INFORMATIVE)
      .contains("Do not share or sell my info")
      .click();
    cy.get('iframe[title="SP Consent Message"]', { timeout: 3000 }).then(
      ($iframe) => {
        cy.wrap($iframe)
          .its("0.contentDocument.body")
          .find('[aria-label="privacy manager"] p[class*="h1"]')
          .should("have.text", "Your Cookie & Data Settings");
      }
    );
  });

  it("Verify that footer informative link Contact technical support in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "Contact technical support"
    );
    mainFunctions.assertURL("/contact-bbc-com-help");
  });

  it("Verify that footer informative link Read about our approach to external linking in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(
      homeLocators.LINK_FOOTER_LINKING,
      "Read about our approach to external linking."
    );
    mainFunctions.assertURL("/guidance/feeds-and-links");
  });
});
