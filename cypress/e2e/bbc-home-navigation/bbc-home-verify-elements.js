/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/Main_Functions";
import { homeLocators } from "../../support/pageObject/locators/bbc-home-navigation-locators/home-navigation-locators";

describe("Verify that the informational navigation links in the footer load the correct pages.", () => {
  const mainFunctions = new MainFunctions();

  beforeEach(() => {
    mainFunctions.beforeEachRoutine();
  });

  it("Verify that logo in header is visible and clickable", () => {
    cy.get(homeLocators.BBC_NAV_LOGO).should("be.visible").click();
    mainFunctions.assertTitle("BBC Home");
  });

  it("Verify that logo in footer is visible and clickable", () => {
    cy.get(homeLocators.BBC_FOOTER_LOGO).should("be.visible").click();
    mainFunctions.assertTitle("BBC Home");
  });

  it('Verify that "Register" link works correctly', () => {
    mainFunctions.clickLink(homeLocators.LINK_REGISTER, "Register");
    mainFunctions.assertURL("/register");
    mainFunctions.assertTitle("Register");
  });

  it('Verify that "Sign in" link works correctly', () => {
    mainFunctions.clickLink(homeLocators.LINK_SIGN_IN, "Sign In");
    mainFunctions.assertURL("/auth");
    mainFunctions.assertTitle("Sign in");
  });
});
