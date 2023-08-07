import {Given, Then, When,} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "@pages/LoginPage";
import OTPPage from "@pages/OTPPage";
import HomePage from "@pages/HomePage";
import ResultsPage from "@pages/ResultsPage";

let testData;
const loginPage = new LoginPage();
const otpPage = new OTPPage();
const homePage = new HomePage();
const resultPage = new ResultsPage();


before(() => {
    cy.clearCookies()
    cy.getCookies().should('be.empty')

    cy.fixture("testData").then((data) => {
        testData = data;

    })
})

Given("Open George AT page", function () {
    cy.visit("/");
});

Given("The user is at the homepage", function () {
    homePage.validateURL();
});

When("Login with user {string}", (username) => {
    loginPage.usernameLogin(username);
})

When("Enter a correct OPT", () => {

    otpPage.enterOTP(testData.otp);
})
Then("The search component is visible and enabled", () => {
    homePage.validateSearchFieldEnabledVisible();
})

When("Search term is entered {string}", (searchTerm) => {
    homePage.enterSearchTerm(searchTerm);
})

When("Search button is clicked", () => {
    homePage.clickOnSearchButton();
})

Then("All results contain {string}", (searchTerm) => {
    resultPage.validateSearchTermInEachResult(searchTerm);
})

