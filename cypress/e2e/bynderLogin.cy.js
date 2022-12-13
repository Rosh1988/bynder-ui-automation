import login from "../selectors/bynderLogin.sel";

var validUname =  Cypress.env('validUname');
var validPwd = Cypress.env('validPwd');
var inValidUname = Cypress.env('inValidUname');
var inValidPwd = Cypress.env('inValidPwd');
var errMsgInvalidCred = Cypress.env('errMsgInvalidCred');
var errMsgMissingPwd = Cypress.env('errMsgMissingPwd');
var logoutMsg = Cypress.env('logoutMsg');

describe("Test Bynder Login Functionality", function()
{
    beforeEach(() => {
        cy.visit("login/")  //baseUrl set in cypress config
        cy.get(login.languageButton).click(); //select EN as Language to prevent cookie overwrite
        cy.get(login.languageEn).contains('English (United States)').click();
      })

    it("Successfully Log in to the website", function()
    {
        cy.get(login.emailField).type(validUname);
        cy.get(login.passwordField).type(validPwd, {log: false})
        cy.get(login.submitField).click()
        cy.get(login.userProfile).should('be.visible')
        cy.get(login.userProfile).click()
        cy.get(login.logoutButton).click()
    })

    it("Login with an invalid credentials to the website", function()
    {
        cy.get(login.emailField).type(inValidUname)
        cy.get(login.passwordField).type(inValidPwd)
        cy.get(login.submitField).click()
        cy.get(login.messageLabel).should('have.text', errMsgInvalidCred)
    });

    it("Login with invalid password to the website", function()
    {
        cy.get(login.emailField).type(validUname)
        cy.get(login.passwordField).type(inValidPwd)
        cy.get(login.submitField).click()
        cy.get(login.messageLabel).should('have.text', errMsgInvalidCred)
    });

    it("Login with an empty password field to the website", function()
    {
        cy.get(login.emailField).type(validUname)
        cy.get(login.submitField).click()
        cy.get(login.messageLabel).should('have.text', errMsgMissingPwd)
    });

    it("User logs out and lands on login page", function()
    {
        cy.get(login.emailField).type(validUname)
        cy.get(login.passwordField).type(validPwd, {log: false})
        cy.get(login.submitField).click()
        cy.get(login.userProfile).click()
        cy.get(login.logoutButton).click()
        cy.get(login.messageLabel).should('have.text', logoutMsg)
    })
})