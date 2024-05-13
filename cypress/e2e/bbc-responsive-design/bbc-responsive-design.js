/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/Main_Functions";
import { homeLocators } from "../../support/pageObject/locators/bbc-home-navigation-locators/home-navigation-locators";

describe("Verify that the bbc.com have responsive design", () => {
  const mainFunctions = new MainFunctions();

  it("Verify that the web page is correctly displayed on the desktop resolution 1399x768.", () => {
    cy.viewport(1399, 768);
    mainFunctions.beforeEachRoutine();
    cy.intercept("GET", "https://www.bbc.com/", (req) => {
      console.log("page:", req);
    }).as("bbc");
    cy.visit("/");
    cy.wait("@bbc").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.title().should("include", "BBC Home");
    cy.get(homeLocators.LINK_REGISTER, {timeout: 5000}).should("be.visible");
    cy.get(homeLocators.LINK_SIGN_IN).should("be.visible");
    cy.get(homeLocators.MAIN_PAGE_GRID).should(
      "have.css",
      "grid-template-columns",
      "924px 308px"
    );
  });

  it("Verify that the web page is correctly displayed on the desktop resolution 1920x1080.", () => {
    cy.viewport(1920, 1080);
    mainFunctions.beforeEachRoutine();
    cy.intercept("GET", "https://www.bbc.com/", (req) => {
      console.log("page:", req);
    }).as("bbc");
    cy.visit("/");
    cy.wait("@bbc").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.title().should("include", "BBC Home");
    cy.get(homeLocators.LINK_REGISTER, {timeout: 5000}).should("be.visible");
    cy.get(homeLocators.LINK_SIGN_IN).should("be.visible");
    cy.get(homeLocators.MAIN_PAGE_GRID).should(
      "have.css",
      "grid-template-columns",
      "924px 308px"
    );
  });

  it("Verify that the web page is correctly displayed on the tablet resolution Samsung Galaxy Tab S4 (712x1138)", () => {
    cy.viewport(712, 1138);
    mainFunctions.beforeEachRoutine();
    cy.intercept("GET", "https://www.bbc.com/", (req) => {
      console.log("page:", req);
    }).as("bbc");
    cy.visit("/");
    cy.wait("@bbc").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.title().should("include", "BBC Home");
    cy.get(homeLocators.LINK_REGISTER, {timeout: 5000}).should("be.visible");
    cy.get(homeLocators.LINK_SIGN_IN).should("be.visible");
    cy.get(homeLocators.MAIN_PAGE_GRID).should(
      "have.css",
      "grid-template-columns",
      "663px"
    );
  });

  it("Verify that the web page is correctly displayed on the tablet resolution iPad Air (820x1180).", () => {
    cy.viewport(820, 1180);
    mainFunctions.beforeEachRoutine();
    cy.intercept("GET", "https://www.bbc.com/", (req) => {
      console.log("page:", req);
    }).as("bbc");
    cy.visit("/");
    cy.wait("@bbc").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.title().should("include", "BBC Home");
    cy.get(homeLocators.LINK_REGISTER, {timeout: 8000}).should("be.visible");
    cy.get(homeLocators.LINK_SIGN_IN).should("be.visible");
    cy.get(homeLocators.MAIN_PAGE_GRID).should(
      "have.css",
      "grid-template-columns",
      "771px"
    );
  });

  it("Verify that the web page is correctly displayed on the mobile resolution Samsung Galaxy S20 Ultra (412x915).", () => {
    cy.viewport(412, 915);
    mainFunctions.beforeEachRoutine();
    cy.intercept("GET", "https://www.bbc.com/", (req) => {
      console.log("page:", req);
    }).as("bbc");
    cy.visit("/");
    cy.wait("@bbc").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.title().should("include", "BBC Home");
    cy.get(homeLocators.LINK_REGISTER, {timeout: 8000}).should("not.be.visible");
    cy.get(homeLocators.LINK_SIGN_IN).should("not.be.visible");
  });

  it("Verify that the web page is correctly displayed on the mobile resolution iPhone 12 Pro (390x844).", () => {
    cy.viewport(390, 844);
    mainFunctions.beforeEachRoutine();
    cy.intercept("GET", "https://www.bbc.com/", (req) => {
      console.log("page:", req);
    }).as("bbc");
    cy.visit("/");
    cy.wait("@bbc").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.title().should("include", "BBC Home");
    cy.get(homeLocators.LINK_REGISTER, {timeout: 8000}).should("not.be.visible");
    cy.get(homeLocators.LINK_SIGN_IN).should("not.be.visible");
  });
});
