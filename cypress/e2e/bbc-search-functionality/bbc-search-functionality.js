/// <reference types="Cypress" />
import { faker } from "@faker-js/faker";
import MainFunctions from "../../support/pageObject/main-functions";
import SearchFunctions from "../../support/pageObject/bbc-search-fuctionality/bbc-search-functions";

describe("Verify search bar functionality", () => {
  const randomSearchValue = faker.word.words(2);
  beforeEach(() => {
    cy.clearCookies()
    MainFunctions.beforeEachRoutine();
  });

  it("Verify that search bar find articles", () => {
    SearchFunctions.searchValue(randomSearchValue);
    MainFunctions.assertURL(
      SearchFunctions.replaceSpacesForUrl(randomSearchValue)
    );
  });
});
