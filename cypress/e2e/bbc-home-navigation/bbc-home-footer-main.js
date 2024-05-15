/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import { homeLocators } from "../../support/pageObject/bbc-home-navigation/home-navigation-locators";

describe("Verify Homepage Navigation in footer main links works as expected", () => {
  const mainFunctions = new MainFunctions();

  beforeEach(() => {
    mainFunctions.beforeEachRoutine();
  });

  it("Verify that BBC.com homepage loaded", () => {
    mainFunctions.bbcHomePageCorrectlyLoaded()
  });

  it("Verify that footer link Home in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Home");
    mainFunctions.assertURL("/");
  });

  it("Verify that footer link News in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "News");
    mainFunctions.assertURL("/news");
  });

  it("Verify that footer link Sport in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Sport");
    mainFunctions.assertURL("/sport");
  });

  it("Verify that footer link Business in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Business");
    mainFunctions.assertURL("/business");
  });

  it("Verify that footer link Innovation in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Innovation");
    mainFunctions.assertURL("/innovation");
  });

  it("Verify that footer link Culture in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Culture");
    mainFunctions.assertURL("/culture");
  });

  it("Verify that footer link Travel in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Travel");
    mainFunctions.assertURL("/travel");
  });
  it("Verify that footer link Earth in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Earth");
    mainFunctions.assertURL("/future-planet");
  });

  it("Verify that footer link Video in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Video");
    mainFunctions.assertURL("/video");
  });

  it("Verify that footer link Live in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Live");
    mainFunctions.assertURL("/live");
  });

  it("Verify that footer link Audio in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Audio");
    mainFunctions.assertURL("/sounds");
  });

  it("Verify that footer link Weather in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Weather");
    mainFunctions.assertURL("/weather");
  });

  it("Verify that footer link BBC Shop in the footer bar load the correct pages.", () => {
    mainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "BBC Shop");
    mainFunctions.assertURL("shop.bbc.com");
  });
});
