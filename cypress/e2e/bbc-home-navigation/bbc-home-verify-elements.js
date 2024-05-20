/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import { homeLocators } from "../../support/pageObject/bbc-home-navigation/home-navigation-locators";

describe("Verify that the informational navigation links in the footer load the correct pages.", () => {

  beforeEach(() => {
    MainFunctions.beforeEachRoutine();
  });

  it("Verify that logo in header is visible and clickable", () => {
    cy.get(homeLocators.BBC_NAV_LOGO).should("be.visible").click();
    MainFunctions.assertTitle("BBC Home");
  });

  it("Verify that logo in footer is visible and clickable", () => {
    cy.get(homeLocators.BBC_FOOTER_LOGO).should("be.visible").click();
    MainFunctions.assertTitle("BBC Home");
  });

  it('Verify that "Register" link works correctly', () => {
    MainFunctions.clickLink(homeLocators.LINK_REGISTER, "Register");
    MainFunctions.assertURL("/register");
    MainFunctions.assertTitle("Register");
  });

  it('Verify that "Sign in" link works correctly', () => {
    MainFunctions.clickLink(homeLocators.LINK_SIGN_IN, "Sign In");
    MainFunctions.assertURL("/auth");
    MainFunctions.assertTitle("Sign in");
  });
});
