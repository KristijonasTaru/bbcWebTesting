/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import { homeLocators } from "../../support/pageObject/bbc-home-navigation/home-navigation-locators";
import { subscriptionLocators } from "../../support/pageObject/subscription-service/subscription-service-locators";

describe("Verify that the Newsletter Subscription works.", () => {
  beforeEach(() => {
    MainFunctions.beforeEachRoutine();
  });

  it("Verify that the user can log in to the BBC.com webpage.", () => {
    MainFunctions.clickLink(homeLocators.LINK_SIGN_IN, "Sign In");
    MainFunctions.assertURL("/auth");
    MainFunctions.signInToBbc();
  });

  it("Verify that the user can subscribe to the BBC.com newsletter", () => {
    MainFunctions.clickLink(homeLocators.LINK_SIGN_IN, "Sign In");
    MainFunctions.assertURL("/auth");
    MainFunctions.signInToBbc();
    cy.get(subscriptionLocators.MENU_YOUR_ACCOUNT_BUTTON, {
      timeout: 3000,
    }).click();
    cy.get(subscriptionLocators.MENU_SETTINGS).click();
    MainFunctions.assertTitle("account overview");
    cy.get(subscriptionLocators.FOOTER_SUBSCRIBE).click();
    cy.get(subscriptionLocators.SUBSCRIBE_SIGN_IN).click();
    cy.get(subscriptionLocators.CONFIRM_SUBSCRIPTION).click();
    cy.get(subscriptionLocators.SUCCESS_MESSAGE).contains(
      "Thank you! You've subscribed and should"
    );
  });

  it("Verify that the user can unsubscribe to the BBC.com newsletter.", () => {
    MainFunctions.clickLink(homeLocators.LINK_SIGN_IN, "Sign In");
    MainFunctions.assertURL("/auth");
    MainFunctions.signInToBbc();
    cy.get(subscriptionLocators.MENU_YOUR_ACCOUNT_BUTTON, {
      timeout: 3000,
    }).click();
    cy.get(subscriptionLocators.MENU_SETTINGS).click();
    MainFunctions.assertTitle("account overview");

    MainFunctions.clickLink(
      subscriptionLocators.MAIN_USER_PAGE_SETTINGS,
      "Settings"
    );
    MainFunctions.assertURL("/account/settings");
    MainFunctions.clickLink(
      subscriptionLocators.EMAIL_PREFERENCES,
      "Email preferences"
    );
    MainFunctions.assertURL("/settings/email-preferences");
    cy.get(subscriptionLocators.BBC_EMAIL_FOR_YOU).click();
    cy.wait(2000)
    cy.get(subscriptionLocators.FOOTER_SUBSCRIBE).click();
    cy.get(subscriptionLocators.SUBSCRIBE_SIGN_IN).click();
    cy.get(subscriptionLocators.CONFIRM_SUBSCRIPTION_TEXT).should("have.text", "Sign Up!");
  });
});
