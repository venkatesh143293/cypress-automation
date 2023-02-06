export class Utility {
    getUrl() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'uat')
            return "";  // required local URL
        else if (envi == 'dev')
            return "";
        else if (envi == 'qa')
            return "";
    }
}