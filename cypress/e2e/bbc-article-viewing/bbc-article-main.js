/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/Main_Functions";
import { articleLocators } from "../../support/pageObject/locators/bbc-article-locators/bbc-articles-locators";

// possible header - "section[data-component='headline-block']" westminster-card Vermont-grid manchester-card edinburgh-card

describe("Verify that the informational navigation links in the footer load the correct pages.", () => {
  const mainFunctions = new MainFunctions();

  beforeEach(() => {
    mainFunctions.beforeEachRoutine();
  });

  it("Verify that clicking on a news article headline takes the user to the full article page.", () => {
    cy.get(articleLocators.ARTICLES_LINK).then($el => {
      const link = $el.attr("href");
      cy.get(articleLocators.ARTICLES).first().click();
      cy.url().should('include', link)
    });
  });

    it("Verify that Article tags forward user to the new page with the articles related to the tag", () => {
      cy.get(articleLocators.ARTICLES).first().click();
      mainFunctions.registerPopUp()
      cy.get('div[data-component="text-block"]').should('have.css', "margin", "0px 591.5px 16px")
    });
});
