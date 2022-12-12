import login from "../selectors/bynderLogin.sel";

var invalidUname = "user_" + Math.random().toString(36);
var uname =  Cypress.env('uname');
var validPwd = Cypress.env('validPwd');
var inValidPwd = Cypress.env('inValidPwd');
var errMsgInvalidCred = Cypress.env('errMsgInvalidCred');
var errMsgMissingPwd = Cypress.env('errMsgMissingPwd');
var logoutMsg = Cypress.env('logoutMsg');

describe("Test Bynder Login Functionality", function()
{
    beforeEach(() => {
        cy.visit("login/")  //baseUrl set in cypress config
      })

    it("Successful Log in to the website", function()
    {
        cy.get(login.emailField).type(uname);
        cy.get(login.passwordField).type(validPwd)
        cy.get(login.submitField).click()
        cy.get(login.userProfile).should('be.visible')
    })

    it("Log in with invalid credentials to the website", function()
    {
        cy.get(login.emailField).type(invalidUname)
        cy.get(login.passwordField).type(inValidPwd)
        cy.get(login.submitField).click()
        cy.get(login.messageLabel).should('have.text', errMsgInvalidCred)
    });

    it("Log in with invalid password to the website", function()
    {
        cy.get(login.emailField).type(uname)
        cy.get(login.passwordField).type(inValidPwd)
        cy.get(login.submitField).click()
        cy.get(login.messageLabel).should('have.text', errMsgInvalidCred)
    });

    it("Login with correct username and leave password field empty", function()
    {
        cy.get(login.emailField).type(uname)
        cy.get(login.submitField).click()
        cy.get(login.messageLabel).should('have.text', errMsgMissingPwd)
    });

    it("User logs out and lands on login page", function()
    {
        cy.get(login.emailField).type(uname)
        cy.get(login.passwordField).type(validPwd)
        cy.get(login.submitField).click()
        cy.get(login.userProfile).click()
        cy.get(login.logoutButton).click()
        cy.get(login.messageLabel).should('have.text', logoutMsg)
    })
})