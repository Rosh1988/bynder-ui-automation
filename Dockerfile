
FROM cypress/included:12.0.2
ADD ./cypress ./cypress
ADD cypress.config.js .
ADD ./package.json ./package.json
RUN npx cypress run
#CMD ["pytest", "./test_movie.py", "-rA", "--html", "report.html"]