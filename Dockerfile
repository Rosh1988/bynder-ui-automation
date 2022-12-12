
FROM cypress/included:12.0.2
ADD ./cypress/e2e ./cypress/e2e
ADD ./cypress/selectors ./cypress/selectors
ADD cypress.config.js .
ADD cypress.env.json .
ADD ./package.json ./package.json
RUN npx cypress run