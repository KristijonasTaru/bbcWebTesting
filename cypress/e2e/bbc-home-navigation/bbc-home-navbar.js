/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import { homeLocators } from "../../support/pageObject/bbc-home-navigation/home-navigation-locators";

describe("Verify Homepage Navigation in navbar works as expected", () => {

  beforeEach(() => {
    MainFunctions.beforeEachRoutine();
  });

  it("Verify that BBC.com homepage loaded", () => {
    MainFunctions.bbcHomePageCorrectlyLoaded()
  });

  it("Verify that navigation link News in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "News");
    MainFunctions.assertURL("/news");
  });

  it("Verify that navigation link Sport in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Sport");
    MainFunctions.assertURL("/sport");
  });

  it("Verify that navigation link Business in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Business");
    MainFunctions.assertURL("/business");
  });

  it("Verify that navigation link Innovation in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Innovation");
    MainFunctions.assertURL("/innovation");
  });

  it("Verify that navigation link Culture in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Culture");
    MainFunctions.assertURL("/culture");
  });

  it("Verify that navigation link Travel in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Travel");
    MainFunctions.assertURL("/travel");
  });
  it("Verify that navigation link Earth in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Earth");
    MainFunctions.assertURL("/future-planet");
  });

  it("Verify that navigation link Video in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Video");
    MainFunctions.assertURL("/video");
  });

  it("Verify that navigation link Live in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Live");
    MainFunctions.assertURL("/live");
  });

  it("Verify that navigation link Home in the navigation bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Home");
    MainFunctions.assertURL("/");
  });
});
