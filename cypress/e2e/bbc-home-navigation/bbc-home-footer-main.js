/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import { homeLocators } from "../../support/pageObject/bbc-home-navigation/home-navigation-locators";

describe("Verify Homepage Navigation in footer main links works as expected", () => {

  beforeEach(() => {
    MainFunctions.beforeEachRoutine();
  });

  it("Verify that BBC.com homepage loaded", () => {
    MainFunctions.bbcHomePageCorrectlyLoaded()
  });

  it("Verify that footer link Home in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Home");
    MainFunctions.assertURL("/");
  });

  it("Verify that footer link News in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "News");
    MainFunctions.assertURL("/news");
  });

  it("Verify that footer link Sport in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Sport");
    MainFunctions.assertURL("/sport");
  });

  it("Verify that footer link Business in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Business");
    MainFunctions.assertURL("/business");
  });

  it("Verify that footer link Innovation in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Innovation");
    MainFunctions.assertURL("/innovation");
  });

  it("Verify that footer link Culture in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Culture");
    MainFunctions.assertURL("/culture");
  });

  it("Verify that footer link Travel in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Travel");
    MainFunctions.assertURL("/travel");
  });
  it("Verify that footer link Earth in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Earth");
    MainFunctions.assertURL("/future-planet");
  });

  it("Verify that footer link Video in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Video");
    MainFunctions.assertURL("/video");
  });

  it("Verify that footer link Live in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Live");
    MainFunctions.assertURL("/live");
  });

  it("Verify that footer link Audio in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Audio");
    MainFunctions.assertURL("/sounds");
  });

  it("Verify that footer link Weather in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "Weather");
    MainFunctions.assertURL("/weather");
  });

  it("Verify that footer link BBC Shop in the footer bar load the correct pages.", () => {
    MainFunctions.clickLink(homeLocators.LINKS_FOOTER_MAIN, "BBC Shop");
    MainFunctions.assertURL("shop.bbc.com");
  });
});
