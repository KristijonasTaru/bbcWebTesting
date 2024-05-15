/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import { articleLocators } from "../../support/pageObject/bbc-article/bbc-articles-locators";

describe("Verify that users can navigate to related articles or sections from the article page.", () => {

  beforeEach(() => {
    MainFunctions.beforeEachRoutine();
    cy.get(articleLocators.ARTICLES).first().click();
    MainFunctions.acceptCookies();
    MainFunctions.closePopUpWindow();
  });

  it("Verify that navigation link News in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "News");
    MainFunctions.assertURL("/news");
  });

  it("Verify that navigation link Sport in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Sport");
    MainFunctions.assertURL("/sport");
  });

  it("Verify that navigation link Business in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Business");
    MainFunctions.assertURL("/business");
  });

  it("Verify that navigation link Innovation in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Innovation");
    MainFunctions.assertURL("/innovation");
  });

  it("Verify that navigation link Culture in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Culture");
    MainFunctions.assertURL("/culture");
  });

  it("Verify that navigation link Travel in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Travel");
    MainFunctions.assertURL("/travel");
  });

  it("Verify that navigation link Earth in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Earth");
    MainFunctions.assertURL("/future-planet");
  });

  it("Verify that navigation link Video in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Video");
    MainFunctions.assertURL("/video");
  });

  it("Verify that navigation link Live in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Live");
    MainFunctions.assertURL("/live");
  });

  it("Verify that navigation link Home in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(articleLocators.NAVBAR_ARTICLE, "Home");
    MainFunctions.assertURL("/");
  });
});
