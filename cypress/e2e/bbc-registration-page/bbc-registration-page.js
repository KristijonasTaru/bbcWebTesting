/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import { homeLocators } from "../../support/pageObject/bbc-home-navigation/home-navigation-locators";
import { registrationPageLocators } from "../../support/pageObject/bbc-registration-page/bbc-registration-pageLocators";

describe("Verify that user registration page have validations.", () => {
  beforeEach(() => {
    MainFunctions.beforeEachRoutine();
  });

  it("Verify that users can't register if its under 16 year old", () => {
    MainFunctions.clickLink(homeLocators.LINK_REGISTER, "Register");
    MainFunctions.assertURL("/register");
    MainFunctions.assertTitle("Register");
    cy.get(registrationPageLocators.UNDER_SIXTEEN_BUTTON).click();
    cy.get(registrationPageLocators.UNDER_SIXTEEN_INFORMATIVE_MESSAGE).should(
      "have.text",
      "Sorry, only 16s and over can register outside the UK"
    );
    cy.get(registrationPageLocators.UNDER_SIXTEEN_OK_BUTTON).click();
    MainFunctions.assertTitle("BBC Home - Breaking News, World News");
  });

  it("Verify that user can not insert dates that is unreasonable - incorrect year", () => {
    MainFunctions.clickLink(homeLocators.LINK_REGISTER, "Register");
    MainFunctions.assertURL("/register");
    MainFunctions.assertTitle("Register");
    cy.get(registrationPageLocators.OVER_SIXTEEN_BUTTON).click();
    cy.fixture("credentials.json").then((credentials) => {
      cy.get(registrationPageLocators.DOB_DAY_INPUT).type(
        credentials.env.correctDay
      );
      cy.get(registrationPageLocators.DOB_MONTH_INPUT).type(
        credentials.env.correctMonth
      );
      cy.get(registrationPageLocators.DOB_YEAR_INPUT).type(
        credentials.env.incorrectYear
      );
      cy.get(registrationPageLocators.DOB_CONTINUE_BUTTON).click();
      cy.get(registrationPageLocators.DOB_INFORMAL_MESSAGE).should(
        "have.text",
        "Sorry, that year doesn’t seem right. Please try again."
      );
    });
  });

  it("Verify that user can not insert dates that is unreasonable - incorrect month", () => {
    MainFunctions.clickLink(homeLocators.LINK_REGISTER, "Register");
    MainFunctions.assertURL("/register");
    MainFunctions.assertTitle("Register");
    cy.get(registrationPageLocators.OVER_SIXTEEN_BUTTON).click();
    cy.fixture("credentials.json").then((credentials) => {
      cy.get(registrationPageLocators.DOB_DAY_INPUT).type(
        credentials.env.correctDay
      );
      cy.get(registrationPageLocators.DOB_MONTH_INPUT).type(
        credentials.env.incorrectMonth
      );
      cy.get(registrationPageLocators.DOB_YEAR_INPUT).type(
        credentials.env.incorrectYear
      );
      cy.get(registrationPageLocators.DOB_CONTINUE_BUTTON).click();
      cy.get(registrationPageLocators.DOB_INFORMAL_MESSAGE).should(
        "have.text",
        "Oops, that month doesn't look right. Make sure it's a real date written as DD-MM-YYYY e.g. the 5th of June 2009 is 05-06-2009."
      );
    });
  });

  it("Verify that user can not insert dates that is unreasonable - incorrect day", () => {
    MainFunctions.clickLink(homeLocators.LINK_REGISTER, "Register");
    MainFunctions.assertURL("/register");
    MainFunctions.assertTitle("Register");
    cy.get(registrationPageLocators.OVER_SIXTEEN_BUTTON).click();
    cy.fixture("credentials.json").then((credentials) => {
      cy.get(registrationPageLocators.DOB_DAY_INPUT).type(
        credentials.env.incorrectDay
      );
      cy.get(registrationPageLocators.DOB_MONTH_INPUT).type(
        credentials.env.correctMonth
      );
      cy.get(registrationPageLocators.DOB_YEAR_INPUT).type(
        credentials.env.incorrectYear
      );
      cy.get(registrationPageLocators.DOB_CONTINUE_BUTTON).click();
      cy.get(registrationPageLocators.DOB_INFORMAL_MESSAGE).should(
        "have.text",
        "Oops, that day doesn't look right. Make sure it's a real date written as DD-MM-YYYY e.g. the 5th of June 2009 is 05-06-2009."
      );
    });
  });

  it("Verify that user can not insert dates that is unreasonable - minor", () => {
    MainFunctions.clickLink(homeLocators.LINK_REGISTER, "Register");
    MainFunctions.assertURL("/register");
    MainFunctions.assertTitle("Register");
    cy.get(registrationPageLocators.OVER_SIXTEEN_BUTTON).click();
    cy.fixture("credentials.json").then((credentials) => {
      cy.get(registrationPageLocators.DOB_DAY_INPUT).type(
        credentials.env.correctDay
      );
      cy.get(registrationPageLocators.DOB_MONTH_INPUT).type(
        credentials.env.correctMonth
      );
      cy.get(registrationPageLocators.DOB_YEAR_INPUT).type(
        credentials.env.underAgeYear
      );
      cy.get(registrationPageLocators.DOB_CONTINUE_BUTTON).click();
      cy.get(registrationPageLocators.DOB_INFORMAL_MESSAGE).should(
        "have.text",
        "Sorry, you need to be 16 or over."
      );
    });
  });

  it("Verify that user can not register with not valid email address ", () => {
    MainFunctions.clickLink(homeLocators.LINK_REGISTER, "Register");
    MainFunctions.assertURL("/register");
    MainFunctions.assertTitle("Register");
    cy.get(registrationPageLocators.OVER_SIXTEEN_BUTTON).click();
    cy.fixture("credentials.json").then((credentials) => {
      cy.get(registrationPageLocators.DOB_DAY_INPUT).type(
        credentials.env.correctDay
      );
      cy.get(registrationPageLocators.DOB_MONTH_INPUT).type(
        credentials.env.correctMonth
      );
      cy.get(registrationPageLocators.DOB_YEAR_INPUT).type(
        credentials.env.correctYear
      );
      cy.get(registrationPageLocators.DOB_CONTINUE_BUTTON).click();

      cy.get(registrationPageLocators.REGISTER_EMAIL_FIELD).type(
        credentials.env.incorrectEmail
      );
      cy.get(registrationPageLocators.REGISTER_PASSWORD_FIELD).type(
        credentials.env.correctPassword
      );
      cy.get(registrationPageLocators.REGISTER_SUBMIT_BUTTON).click()
      cy.get(registrationPageLocators.REGISTER_EMAIL_INFORMAL_MESSAGE).should(
        "have.text",
        "Sorry, that email doesn’t look right. Please check it's a proper email."
      );
    });
  });

  it("Verify that password validation is working as expected (password to short)", () => {
    MainFunctions.clickLink(homeLocators.LINK_REGISTER, "Register");
    MainFunctions.assertURL("/register");
    MainFunctions.assertTitle("Register");
    cy.get(registrationPageLocators.OVER_SIXTEEN_BUTTON).click();
    cy.fixture("credentials.json").then((credentials) => {
      cy.get(registrationPageLocators.DOB_DAY_INPUT).type(
        credentials.env.correctDay
      );
      cy.get(registrationPageLocators.DOB_MONTH_INPUT).type(
        credentials.env.correctMonth
      );
      cy.get(registrationPageLocators.DOB_YEAR_INPUT).type(
        credentials.env.correctYear
      );
      cy.get(registrationPageLocators.DOB_CONTINUE_BUTTON).click();

      cy.get(registrationPageLocators.REGISTER_EMAIL_FIELD).type(
        credentials.env.correctEmail
      );
      cy.get(registrationPageLocators.REGISTER_PASSWORD_FIELD).type(
        credentials.env.passwordShort
      );
      cy.get(registrationPageLocators.REGISTER_SUBMIT_BUTTON).click()
      cy.get(registrationPageLocators.REGISTER_PASSWORD_INFORMAL_MESSAGE).should(
        "have.text",
        "Sorry, that password is too short. It needs to be eight characters or more."
      );
    });
  });

  it("Verify that password validation is working as expected (password missing letter)", () => {
    MainFunctions.clickLink(homeLocators.LINK_REGISTER, "Register");
    MainFunctions.assertURL("/register");
    MainFunctions.assertTitle("Register");
    cy.get(registrationPageLocators.OVER_SIXTEEN_BUTTON).click();
    cy.fixture("credentials.json").then((credentials) => {
      cy.get(registrationPageLocators.DOB_DAY_INPUT).type(
        credentials.env.correctDay
      );
      cy.get(registrationPageLocators.DOB_MONTH_INPUT).type(
        credentials.env.correctMonth
      );
      cy.get(registrationPageLocators.DOB_YEAR_INPUT).type(
        credentials.env.correctYear
      );
      cy.get(registrationPageLocators.DOB_CONTINUE_BUTTON).click();

      cy.get(registrationPageLocators.REGISTER_EMAIL_FIELD).type(
        credentials.env.correctEmail
      );
      cy.get(registrationPageLocators.REGISTER_PASSWORD_FIELD).type(
        credentials.env.passwordNoLetters
      );
      cy.get(registrationPageLocators.REGISTER_SUBMIT_BUTTON).click()
      cy.get(registrationPageLocators.REGISTER_PASSWORD_INFORMAL_MESSAGE).should(
        "have.text",
        "Sorry, that password isn't valid. Please include a letter."
      );
    });
  });

  it("Verify that user can not register with not valid email address ", () => {
    MainFunctions.clickLink(homeLocators.LINK_REGISTER, "Register");
    MainFunctions.assertURL("/register");
    MainFunctions.assertTitle("Register");
    cy.get(registrationPageLocators.OVER_SIXTEEN_BUTTON).click();
    cy.fixture("credentials.json").then((credentials) => {
      cy.get(registrationPageLocators.DOB_DAY_INPUT).type(
        credentials.env.correctDay
      );
      cy.get(registrationPageLocators.DOB_MONTH_INPUT).type(
        credentials.env.correctMonth
      );
      cy.get(registrationPageLocators.DOB_YEAR_INPUT).type(
        credentials.env.correctYear
      );
      cy.get(registrationPageLocators.DOB_CONTINUE_BUTTON).click();

      cy.get(registrationPageLocators.REGISTER_EMAIL_FIELD).type(
        credentials.env.correctEmail
      );
      cy.get(registrationPageLocators.REGISTER_PASSWORD_FIELD).type(
        credentials.env.passwordNoSpecialChar
      );
      cy.get(registrationPageLocators.REGISTER_SUBMIT_BUTTON).click()
      cy.get(registrationPageLocators.REGISTER_PASSWORD_INFORMAL_MESSAGE).should(
        "have.text",
        "Sorry, that password isn't valid. Please include something that isn't a letter."
      );
    });
  });
});
