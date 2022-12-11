# E2E test suite with Cypress
> **application under test:** https://wave-trial.getbynder.com/

## :gear: Setup

1. `git clone https://github.com/Rosh1988/BynderUIAutomation.git`
2. cd to `cypress` folder and run `npm install`


## :heavy_check_mark: Run tests

- If you installed Cypress via npm: 
    - cypress test runner (cypress __open__):
      - `npx cypress open`
    

## :bulb: Information
#### :test_tube: Tests:
:file_folder: Tests are located in `cypress/e2e/` folder              
:file_folder: Selectors are located in `cypress/selectors` folder

#### :hammer_and_wrench: Configuration
Config files:
1. `cypress.config.js` - baseUrl is set in the config.

## :heavy_check_mark: Test Scenarios
### : Feature : Login
As a new user
I want to login to Bynder portal (https://wave-trial.getbynder.com/)
So that I can check it’s free trial features

### Scenario #1 : Successful Log in to the website
***
**Given** User is on https://wave-trial.getbynder.com/login/
**When** User enters a valid email &lt;email&gt; and password &lt;password&gt;    
**And** User clicks logs in   
**Then** User should be successfully logged into the site   
**And** User lands on Dashboard
**And** User Profile is shown correctly

### Scenario #2: User logs out and lands on login page
***
**Given** User is logged in   
**When** User clicks on profile dropdown  
**And** User clicks on Logout  
**Then** User is logged out  
**And** User lands back on Login page

### Scenario #3 : Log in with invalid password to the website
***
**Given** User is on https://wave-trial.getbynder.com/login/
**When** User enters an valid email &lt;email&gt; and invalid password &lt;password&gt;  
**And** User clicks logs in  
**Then** You have entered an incorrect username or password information should be
shown

### Scenario #4 : Log in with invalid credentials to the website
***
**Given** User is on https://wave-trial.getbynder.com/login/
**When** User enters an invalid email &lt;email&gt; and invalid password &lt;password&gt;  
**And** User clicks logs in   
**Then** You have entered an incorrect username or password information should be
shown

### Scenario #5 : Please enter your password message should be shown
***
**Given** User is on https://wave-trial.getbynder.com/login/
**When** User enters a valid email &lt;email&gt;  
**But** Leaves password field empty  
**And** Clicks on Login button  
**Then** Please enter your password message should be shown

