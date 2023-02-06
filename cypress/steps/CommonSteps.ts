import { Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";
import { Utility } from "../support/Utility";

const loginPage = new LoginPage();
const url = new Utility().getUrl();

Given('the user opens the Login page', () => {
    loginPage.navigate(url!);
});

