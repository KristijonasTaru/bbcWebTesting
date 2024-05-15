/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import { homeLocators } from "../../support/pageObject/bbc-home-navigation/home-navigation-locators";

describe("Verify that the bbc.com have responsive design", () => {
  it("Verify that the web page is correctly displayed on the desktop resolution 1399x768.", () => {
    cy.viewport(1399, 768);
    MainFunctions.bbcHomePageCorrectlyLoaded();
    MainFunctions.beforeEachRoutine();
    cy.get(homeLocators.LINK_REGISTER, { timeout: 5000 }).should("be.visible");
    cy.get(homeLocators.LINK_SIGN_IN).should("be.visible");
    cy.get(homeLocators.MAIN_PAGE_GRID).should(($grid) => {
      //grid-template-columns first grid width divide from second grid width then check that expect ratio is the same as grid expected grid-template-columns: 3fr 1fr;
      const firstColumnWidth = $grid.children("[data-testid='Vermont-grid'] > div:first-child").width();
      const secondColumnWidth = $grid.children("[data-testid='Vermont-grid'] > div:last-child").width();
      const ratio = firstColumnWidth / secondColumnWidth;
      const expectedRatio = 3
      expect(ratio).to.be.equal(expectedRatio)
    });
  });

  it("Verify that the web page is correctly displayed on the desktop resolution 1920x1080.", () => {
    cy.viewport(1920, 1080);
    MainFunctions.bbcHomePageCorrectlyLoaded();
    MainFunctions.beforeEachRoutine();
    cy.get(homeLocators.LINK_REGISTER, { timeout: 5000 }).should("be.visible");
    cy.get(homeLocators.LINK_SIGN_IN).should("be.visible");
    cy.get(homeLocators.MAIN_PAGE_GRID).should(($grid) => {
      //grid-template-columns first grid width divide from second grid width then check that expect ratio is the same as grid expected grid-template-columns: 3fr 1fr;
      const firstColumnWidth = $grid.children("[data-testid='Vermont-grid'] > div:first-child").width();
      const secondColumnWidth = $grid.children("[data-testid='Vermont-grid'] > div:last-child").width();
      const ratio = firstColumnWidth / secondColumnWidth;
      const expectedRatio = 3
      expect(ratio).to.be.equal(expectedRatio)
    });
  });

  it("Verify that the web page is correctly displayed on the tablet resolution Samsung Galaxy Tab S4 (712x1138)", () => {
    cy.viewport(712, 1138);
    MainFunctions.bbcHomePageCorrectlyLoaded();
    MainFunctions.beforeEachRoutine();
    cy.get(homeLocators.LINK_REGISTER, { timeout: 5000 }).should("be.visible");
    cy.get(homeLocators.LINK_SIGN_IN).should("be.visible");
    cy.get(homeLocators.MAIN_PAGE_GRID).should(($grid) => {
      //grid-template-columns first grid width divide from second grid width then check that expect ratio is the same as grid expected grid-template-columns: 3fr 1fr;
      const firstColumnWidth = $grid.children("[data-testid='Vermont-grid'] > div:first-child").width();
      const secondColumnWidth = $grid.children("[data-testid='Vermont-grid'] > div:last-child").width();
      const ratio = firstColumnWidth / secondColumnWidth;
      const expectedRatio = 1
      expect(ratio).to.be.equal(expectedRatio)
    });
  });

  it("Verify that the web page is correctly displayed on the tablet resolution iPad Air (820x1180).", () => {
    cy.viewport(820, 1180);
    MainFunctions.bbcHomePageCorrectlyLoaded();
    MainFunctions.beforeEachRoutine();
    cy.get(homeLocators.LINK_REGISTER, { timeout: 8000 }).should("be.visible");
    cy.get(homeLocators.LINK_SIGN_IN).should("be.visible");
    cy.get(homeLocators.MAIN_PAGE_GRID).should(($grid) => {
      //grid-template-columns first grid width divide from second grid width then check that expect ratio is the same as grid expected grid-template-columns: 3fr 1fr;
      const firstColumnWidth = $grid.children("[data-testid='Vermont-grid'] > div:first-child").width();
      const secondColumnWidth = $grid.children("[data-testid='Vermont-grid'] > div:last-child").width();
      const ratio = firstColumnWidth / secondColumnWidth;
      const expectedRatio = 1
      expect(ratio).to.be.equal(expectedRatio)
    });
  });

  it("Verify that the web page is correctly displayed on the mobile resolution Samsung Galaxy S20 Ultra (412x915).", () => {
    cy.viewport(412, 915);
    MainFunctions.bbcHomePageCorrectlyLoaded();
    MainFunctions.beforeEachRoutine();
    cy.get(homeLocators.LINK_REGISTER, { timeout: 8000 }).should(
      "not.be.visible"
    );
    cy.get(homeLocators.LINK_SIGN_IN).should("not.be.visible");
  });

  it("Verify that the web page is correctly displayed on the mobile resolution iPhone 12 Pro (390x844).", () => {
    cy.viewport(390, 844);
    MainFunctions.bbcHomePageCorrectlyLoaded();
    MainFunctions.beforeEachRoutine();
    cy.get(homeLocators.LINK_REGISTER, { timeout: 8000 }).should(
      "not.be.visible"
    );
    cy.get(homeLocators.LINK_SIGN_IN).should("not.be.visible");
  });
});
