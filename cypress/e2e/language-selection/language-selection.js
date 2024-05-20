/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import { otherLanguagesLocators } from "../../support/pageObject/bbc-other-languages/bbc-in-other-languages-locators";

describe("Verify that users can select different BBC region from the BBC in Portugal, Turkish and Yoruba languages menu.", () => {

  beforeEach(() => {
    MainFunctions.beforeEachRoutine();
    MainFunctions.clickLink(
      otherLanguagesLocators.MENU_BUTTON,
      "BBC in other languages"
    );
  });

  it("Verify that BBC websites of Portugal region opens from footer", () => {
    MainFunctions.clickLink(otherLanguagesLocators.MENU, "Portuguese BRASIL");
    MainFunctions.assertURL("/portuguese");
    MainFunctions.assertTitle(
      "Notícias, vídeos, análise e contexto em português"
    );
  });

  it("Verify that BBC websites of Turkish region opens from footer", () => {
    MainFunctions.clickLink(otherLanguagesLocators.MENU, "Turkish TÜRKÇE");
    MainFunctions.assertURL("/turkce");
    MainFunctions.assertTitle("Haberler - BBC News Türkçe");
  });

  it("Verify that BBC websites of Yoruba region opens from footer", () => {
    MainFunctions.clickLink(otherLanguagesLocators.MENU, "Yoruba");
    MainFunctions.assertURL("/yoruba")
    MainFunctions.assertTitle("Àbáwọlé - BBC News Yorùbá");
  });
});
