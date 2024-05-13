/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/Main_Functions";
import { homeLocators } from "../../support/pageObject/locators/bbc-home-navigation-locators/home-navigation-locators";
import { subscriptionLocators } from "../../support/pageObject/locators/subscription-service-locators/subscription-service-locators";

describe("Verify that the Newsletter Subscription works.", () => {
  const mainFunctions = new MainFunctions();

  beforeEach(() => {
    mainFunctions.beforeEachRoutine();
  });

  it("Verify that the user can log in to the BBC.com webpage.", () => {
    mainFunctions.clickLink(homeLocators.LINK_SIGN_IN, "Sign In");
    mainFunctions.assertURL("/auth");
    mainFunctions.signInToBbc();
  });

  it("Verify that the user can subscribe to the BBC.com newsletter", () => {
    mainFunctions.clickLink(homeLocators.LINK_SIGN_IN, "Sign In");
    mainFunctions.assertURL("/auth");
    mainFunctions.signInToBbc();
    cy.get(subscriptionLocators.MENU_YOUR_ACCOUNT_BUTTON, {
      timeout: 3000,
    }).click();
    cy.get(subscriptionLocators.MENU_SETTINGS).click();
    mainFunctions.assertTitle("account overview");
    cy.get(subscriptionLocators.FOOTER_SUBSCRIBE).click();
    cy.get(subscriptionLocators.SUBSCRIBE_SIGN_IN).click();
    cy.get(subscriptionLocators.CONFIRM_SUBSCRIPTION, {
      timeout: 5000,
    }).click();
    cy.get(subscriptionLocators.SUCCESS_MESSAGE).contains(
      "Thank you! You've subscribed and should"
    );
  });

  it("Verify that the user can unsubscribe to the BBC.com newsletter.", () => {
    mainFunctions.clickLink(homeLocators.LINK_SIGN_IN, "Sign In");
    mainFunctions.assertURL("/auth");
    mainFunctions.signInToBbc();
    cy.get(subscriptionLocators.MENU_YOUR_ACCOUNT_BUTTON, {
      timeout: 3000,
    }).click();
    cy.get(subscriptionLocators.MENU_SETTINGS).click();
    mainFunctions.assertTitle("account overview");

    mainFunctions.clickLink(
      subscriptionLocators.MAIN_USER_PAGE_SETTINGS,
      "Settings"
    );
    mainFunctions.assertURL("/account/settings");
    mainFunctions.clickLink(
      subscriptionLocators.EMAIL_PREFERENCES,
      "Email preferences"
    );
    mainFunctions.assertURL("/settings/email-preferences");

    cy.get(subscriptionLocators.BBC_EMAIL_FOR_YOU)
      .click()
      .should("not.be.checked");
  });
});
