/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import { homeLocators } from "../../support/pageObject/bbc-home-navigation/home-navigation-locators";

describe("Verify Homepage Navigation in navbar works as expected", () => {
  const mainFunctions = new MainFunctions();

  beforeEach(() => {
    mainFunctions.beforeEachRoutine();
  });

  it("Verify that BBC.com homepage loaded", () => {
    mainFunctions.bbcHomePageCorrectlyLoaded()
  });

  it("Verify that navigation link News in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "News");
    mainFunctions.assertURL("/news");
  });

  it("Verify that navigation link Sport in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Sport");
    mainFunctions.assertURL("/sport");
  });

  it("Verify that navigation link Business in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Business");
    mainFunctions.assertURL("/business");
  });

  it("Verify that navigation link Innovation in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Innovation");
    mainFunctions.assertURL("/innovation");
  });

  it("Verify that navigation link Culture in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Culture");
    mainFunctions.assertURL("/culture");
  });

  it("Verify that navigation link Travel in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Travel");
    mainFunctions.assertURL("/travel");
  });
  it("Verify that navigation link Earth in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Earth");
    mainFunctions.assertURL("/future-planet");
  });

  it("Verify that navigation link Video in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Video");
    mainFunctions.assertURL("/video");
  });

  it("Verify that navigation link Live in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Live");
    mainFunctions.assertURL("/live");
  });

  it("Verify that navigation link Home in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Home");
    mainFunctions.assertURL("/");
  });
});
