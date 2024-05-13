/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/Main_Functions";

describe("Verify that users can navigate to related articles or sections from the article page.", () => {
  const mainFunctions = new MainFunctions();

  beforeEach(() => {
    mainFunctions.beforeEachRoutine();
    cy.get('[data-testid="edinburgh-article"]').first().click();
    mainFunctions.registerPopUp()
  });


  it("Verify that navigation link News in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(
      `nav li[data-testid$='mainNavigationItemStyled']`,
      "News",
      "/news"
    );
  });

  it("Verify that navigation link Sport in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(
      `nav li[data-testid$='mainNavigationItemStyled']`,
      "Sport",
      "/sport"
    );
  });

  it("Verify that navigation link Business in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(
      `nav li[data-testid$='mainNavigationItemStyled']`,
      "Business",
      "/business"
    );
  });

  it("Verify that navigation link Innovation in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(
      `nav li[data-testid$='mainNavigationItemStyled']`,
      "Innovation",
      "/innovation"
    );
  });

  it("Verify that navigation link Culture in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(
      `nav li[data-testid$='mainNavigationItemStyled']`,
      "Culture",
      "/culture"
    );
  });

  it("Verify that navigation link Travel in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(
      `nav li[data-testid$='mainNavigationItemStyled']`,
      "Travel",
      "/travel"
    );
  });
  it("Verify that navigation link Earth in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(
      `nav li[data-testid$='mainNavigationItemStyled']`,
      "Earth",
      "/future-planet"
    );
  });

  it("Verify that navigation link Video in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(
      `nav li[data-testid$='mainNavigationItemStyled']`,
      "Video",
      "/video"
    );
  });

  it("Verify that navigation link Live in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(
      `nav li[data-testid$='mainNavigationItemStyled']`,
      "Live",
      "/live"
    );
  });

  it("Verify that navigation link Home in the navigation bar load the correct pages.", () => {
    mainFunctions.clickLink(
      `nav li[data-testid$='mainNavigationItemStyled']`,
      "Home",
      "/"
    );
  });

//   it("Verify that the user can navigate to News page from the navigation menu.", () => {
//     cy.get('[data-testid="westminster"]').click();
//     mainFunctions.clickLink(
//         `header ul[data-orbit-navtype='Commercial Default'] `,
//         "News",
//         "/news"
//       );
//   });

//   it("Verify that the user can navigate to Sport page from the navigation menu.", () => {
//     cy.get('[data-testid="westminster"]').click();
//     mainFunctions.clickLink(
//         `header ul[data-orbit-navtype='Commercial Default']`,
//         "Sport",
//         "/sport"
//       );
//   });

//   it("Verify that the user can navigate to Business page from the navigation menu.", () => {
//     cy.get('[data-testid="westminster"]').click();
//     mainFunctions.clickLink(
//         `header ul[data-orbit-navtype='Commercial Default']`,
//         "Business",
//         "/business"
//       );
//   });

//   it("Verify that the user can navigate to Innovation page from the navigation menu.", () => {
//     cy.get('[data-testid="westminster"]').click();
//     mainFunctions.clickLink(
//         `header ul[data-orbit-navtype='Commercial Default']`,
//         "Innovation",
//         "/innovation"
//       );
//   });

//   it("Verify that the user can navigate to Culture page from the navigation menu.", () => {
//     cy.get('[data-testid="westminster"]').click();
//     mainFunctions.clickLink(
//         `header ul[data-orbit-navtype='Commercial Default']`,
//         "Culture",
//         "/culture"
//       );
//   });

//   it("Verify that the user can navigate to Travel page from the navigation menu.", () => {
//     cy.get('[data-testid="westminster"]').click();
//     mainFunctions.clickLink(
//         `header ul[data-orbit-navtype='Commercial Default']`,
//         "Travel",
//         "/travel"
//       );
//   });

//   it("Verify that the user can navigate to Earth page from the navigation menu.", () => {
//     cy.get('[data-testid="westminster"]').click();
//     cy.get('#orbit-more-button').click()
//     cy.get('.orbit-more-drawer-content > nav > ul > .orb-nav-commercial-earth').click()
//     cy.url().should("include", "/future-planet");

//     // mainFunctions.clickLink(
//     //     `header ul[data-orbit-navtype='Commercial Default']`,
//     //     "Earth",
//     //     "/future-planet"
//     //   );
//   });

//   it("Verify that the user can navigate to Video page from the navigation menu.", () => {
//     cy.get('[data-testid="westminster"]').click();
//     cy.get('#orbit-more-button').click()
//     cy.get('.orbit-more-drawer-content > nav > ul > .orb-nav-commercial-video').click()
//     cy.url().should("include", "/video");
//     // mainFunctions.clickLink(
//     //     `header ul[data-orbit-navtype='Commercial Default']`,
//     //     "Video",
//     //     "/video"
//     //   );
//   });

//   it("Verify that the user can navigate to Live page from the navigation menu.", () => {
//     cy.get('[data-testid="westminster"]').click();
//     cy.get('#orbit-more-button').click()
//     cy.get('.orbit-more-drawer-content > nav > ul > .orb-nav-commercial-live').click()
//     cy.url().should("include", "/live");
//     // mainFunctions.clickLink(
//     //     `header ul[data-orbit-navtype='Commercial Default']`,
//     //     "Live",
//     //     "/live"
//     //   );
//   });

//   it("Verify that the user can navigate to Home page from the navigation menu.", () => {
//     cy.get('[data-testid="westminster"]').click();
//     mainFunctions.clickLink(
//         `header ul[data-orbit-navtype='Commercial Default']`,
//         "Home",
//         "/"
//       );
//   });
});
