<h1 align="center">Bynder Web UI Automation</h1>

This project automates the Web testing for https://wave-trial.getbynder.com/login/

Functionalities in scope for the automation:
- Account Login
- Account Logout

## Dependencies

* __Cypress__

The dependencies are also listed in package.json

## Installation
Pre-requisite:
- Install Node js and npm from [here](https://nodejs.org/en/download/ "here").
- git clone https://github.com/Rosh1988/bynder-ui-automation.git
- cd to cypress folder
- Rename "cypress.env.json_template" file to "cypress.env.json"
- In gthe renamed file, update the 'cypress_ValidPwd' and 'uname' variables with the credentials for running the tests.

__Install Cypress__
```shell
npm install cypress --save-dev
```
> Note: You can also run "npm install" to install dependencies from package.json

## Automated test

__To run tests in Test Runner, execute below command in terminal__

```sh
npm cypress open
```

__To run tests in CLI mode, execute below command in terminal__:
```sh
npm cypress run
```

## Dockerfile

The project is containerized with a docker file (Dockerfile) which should be used to create image and run the project in container. The Dockerfile uses cypress/included as the parent image for the container which includes all operating system dependencies and browsers.

## Test Scenarios

- Tests are located in cypress/e2e
- Selectors are located in cypress/selectors
- Global variables & test data are defined in cypress.env.json


### Feature: Login

As a new user I want to login to [Bynder portal](https://wave-trial.getbynder.com/ "Bynder portal") So that I can check its free trial features.

------------

__Scenario #1: Successfully Log in to the website__

**Given** User is on https://wave-trial.getbynder.com/login/ **When** User enters a valid email/username and password
**And** User clicks logs in
**Then** User should be successfully logged into the site
**And** User lands on Dashboard **And** User Profile is shown correctly

------------

__Scenario #2: User logs out and lands on login page__
**Given** User is logged in
**When** User clicks on profile dropdown
**And** User clicks on Logout
**Then** User is logged out
**And** User lands back on Login page

------------

__Scenario #3 : Log in with invalid password to the website__
**Given** User is on https://wave-trial.getbynder.com/login/ **When** User enters a valid email <email> and an invalid password <password>
**And** User clicks logs in
**Then** A message "You have entered an incorrect username or password information" should be displayed

------------

__Scenario #4 : Login with an invalid credentials to the website__
**Given** User is on https://wave-trial.getbynder.com/login/ **When** User enters an invalid email <email> and invalid password <password>
**And** User clicks Login button
**Then** A message "You have entered an incorrect username or password information" should be displayed

------------

__Scenario #5 : Login with an empty password field to the website__
**Given** User is on https://wave-trial.getbynder.com/login/ **When** User enters a valid email <email>
**But** Leaves password field empty
**And** Clicks on Login button
**Then** A message "Please enter your password" should be displayed.

## CI CD Pipeline on GitHub
A CI CD Pipeline is created on GitHub using the GitHub Actions. The Workflow runs the pipeline on every push and executes the automation tests.
