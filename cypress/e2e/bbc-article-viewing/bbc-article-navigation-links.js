/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import { articleLocators } from "../../support/pageObject/bbc-article/bbc-articles-locators";

describe("Verify that users can navigate to related articles or sections from the article page.", () => {
  const mainFunctions = new MainFunctions();

  beforeEach(() => {
    mainFunctions.beforeEachRoutine();
    cy.get(articleLocators.ARTICLES).first().click();
    mainFunctions.acceptCookies();
    mainFunctions.closePopUpWindow();
  });

  it("Verify that navigation link News in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "News");
    mainFunctions.assertURL("/news");
  });

  it("Verify that navigation link Sport in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Sport");
    mainFunctions.assertURL("/sport");
  });

  it("Verify that navigation link Business in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Business");
    mainFunctions.assertURL("/business");
  });

  it("Verify that navigation link Innovation in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Innovation");
    mainFunctions.assertURL("/innovation");
  });

  it("Verify that navigation link Culture in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Culture");
    mainFunctions.assertURL("/culture");
  });

  it("Verify that navigation link Travel in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Travel");
    mainFunctions.assertURL("/travel");
  });

  it("Verify that navigation link Earth in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Earth");
    mainFunctions.assertURL("/future-planet");
  });

  it("Verify that navigation link Video in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Video");
    mainFunctions.assertURL("/video");
  });

  it("Verify that navigation link Live in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Live");
    mainFunctions.assertURL("/live");
  });

  it("Verify that navigation link Home in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Home");
    mainFunctions.assertURL("/");
  });
});
