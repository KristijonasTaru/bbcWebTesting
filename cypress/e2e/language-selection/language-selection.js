/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/Main_Functions";
import { otherLanguagesLocators } from "../../support/pageObject/locators/bbc-other-languages/bbc-in-other-languages-locators";

describe("Verify that users can select different BBC region from the BBC in Portugal, Turkish and Yoruba languages menu.", () => {
  const mainFunctions = new MainFunctions();

  beforeEach(() => {
    mainFunctions.beforeEachRoutine();
    mainFunctions.clickLink(
      otherLanguagesLocators.MENU_BUTTON,
      "BBC in other languages"
    );
  });

  it("Verify that BBC websites of Portugal region opens from footer", () => {
    mainFunctions.clickLink(otherLanguagesLocators.MENU, "Portuguese BRASIL");
    mainFunctions.assertURL("/portuguese");
    mainFunctions.assertTitle(
      "Notícias, vídeos, análise e contexto em português"
    );

    // cy.title().should(
    //   "include",
    //   "Notícias, vídeos, análise e contexto em português"
    // );
  });

  it("Verify that BBC websites of Turkish region opens from footer", () => {
    mainFunctions.clickLink(otherLanguagesLocators.MENU, "Turkish TÜRKÇE");
    mainFunctions.assertURL("/turkce");
    mainFunctions.assertTitle("Haberler - BBC News Türkçe");
  });

  it("Verify that BBC websites of Yoruba region opens from footer", () => {
    mainFunctions.clickLink(otherLanguagesLocators.MENU, "Yoruba");
    mainFunctions.assertURL("/yoruba")
    mainFunctions.assertTitle("Àbáwọlé - BBC News Yorùbá");
  });
});
