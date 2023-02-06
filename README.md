# Tech stack
* Cypress
* Typescript
* Cucumber-preprocessor
* Multiple Cucumber HTML report

# Steps
* cd to path of project
* Init repos with npm
``` $ npm init -y```
* Generate tsconfig.json file
``` $ tsc --init```
* Install dependencies
``` $ npm i cypress typescript @badeball/cypress-cucumber-preprocessor multiple-cucumber-html-reporter```
* Open/run cypress
```$ npx cypress run```
```$ npx cypress open```

# Note
* To display the cypress folder: ```$ npx cypress open```
* Rename cypress.config.js to cypress.config.ts
* Generate report: ```$ node generate-multiple-cucumber-html-reporter.js```