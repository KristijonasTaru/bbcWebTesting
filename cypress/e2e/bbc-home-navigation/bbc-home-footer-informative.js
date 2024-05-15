/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import { mainFunctionLocators } from "../../support/pageObject/main-function/main-function-locators";
import { homeLocators } from "../../support/pageObject/bbc-home-navigation/home-navigation-locators";

describe("Verify that the informational navigation links in the footer load the correct pages.", () => {
  beforeEach(() => {
    MainFunctions.beforeEachRoutine();
  });

  it("Verify that footer informative link Terms of Use in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "Terms of Use"
    );
    MainFunctions.assertURL("/usingthebbc/terms");
  });

  it("Verify that footer informative link About the BBC in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "About the BBC"
    );
    MainFunctions.assertURL("/aboutthebbc");
  });

  it("Verify that footer informative link Privacy Policy in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "Privacy Policy"
    );
    MainFunctions.assertURL("/usingthebbc/privacy");
  });

  it("Verify that footer informative link Cookies in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_INFORMATIVE, "Cookies");
    MainFunctions.assertURL("usingthebbc/cookies");
  });

  it("Verify that footer informative link Accessibility Help in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "Accessibility Help"
    );
    MainFunctions.assertURL("/accessibility/");
  });

  it("Verify that footer informative link Contact the BBC in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "Contact the BBC"
    );
    MainFunctions.assertURL("/contact");
  });

  it("Verify that footer informative link Advertise with us Help in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "Advertise with us"
    );
    MainFunctions.assertURL("/advertisingcontact");
  });

  it("Verify that footer informative link Do not share or sell my info in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "Do not share or sell my info"
    );
    cy.wait(2000);
    cy.url().then((url) => {
      if (url.includes("/how-can-i-change-my-bbc-cookie-settings/")) {
        MainFunctions.assertURL("/how-can-i-change-my-bbc-cookie-settings/");
      } else {
        cy.get(mainFunctionLocators.IFRAME, { timeout: 3000 }).then(
          ($iframe) => {
            cy.wrap($iframe)
              .its(mainFunctionLocators.IFRAME_BODY)
              .find(homeLocators.IFRAME_HEADER)
              .should("have.text", "Your Cookie & Data Settings");
          }
        );
      }
    });
  });

  it("Verify that footer informative link Contact technical support in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(
      homeLocators.LINKS_FOOTER_INFORMATIVE,
      "Contact technical support"
    );
    MainFunctions.assertURL("/contact-bbc-com-help");
  });

  it("Verify that footer informative link Read about our approach to external linking in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(
      homeLocators.LINK_FOOTER_LINKING,
      "Read about our approach to external linking."
    );
    MainFunctions.assertURL("/guidance/feeds-and-links");
  });
});
