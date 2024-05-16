/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import { articleLocators } from "../../support/pageObject/bbc-article/bbc-articles-locators";

describe("Verify that the informational navigation links in the footer load the correct pages.", () => {

  beforeEach(() => {
    MainFunctions.beforeEachRoutine();
  });

  it("Verify that clicking on a news article headline takes the user to the full article page.", () => {
    cy.get(articleLocators.ARTICLES)
      .first()
      .parent(articleLocators.ARTICLES_LINK)
      .then(($el) => {
        const link = $el.attr("href");
        cy.get(articleLocators.ARTICLES).first().click();
        cy.url().should("include", link);
      });
  });

  it("Verify that article is centred", () => {
    cy.get(articleLocators.ARTICLES).first().click();
    MainFunctions.acceptCookies();
    MainFunctions.closePopUpWindow();
    cy.get(articleLocators.ARTICLE_TEXT).then(($articleText) => {
      const textStyle = window.getComputedStyle($articleText[0]);
      expect(textStyle.marginLeft).to.equal(textStyle.marginRight);
    });
  });
});
