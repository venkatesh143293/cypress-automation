/// <reference types="cypress-xpath" />
class LoginPage {
  elements = {
    inputUser: () => cy.get("input[type='mail']"),
    inputPass: () => cy.get("input[type='password']"),
    btnLogin: () => cy.get("button[type='submit']"),
    lblLanding:()=>cy.get("div[class*='MuiAvatar']"),
    lbError: () => cy.get("#swal2-title"),
    btnLogout: () => cy.get("li:last-child"),
  };

  navigate(url: string) {
    cy.visit(url);
  }

  isAt() {
    return this.elements.btnLogin();
  }

  setUser(user: string) {
    this.elements.inputUser()
    .clear()
    .type(user);
  }

  setPass(pass: string) {
    this.elements.inputPass()
    .clear()
    .type(pass);
  }

  clickOnLogin() {
    this.elements.btnLogin().click();
  }

  login(user: string, pass: string) {
    this.setUser(user);
    this.setPass(pass);
    this.clickOnLogin();
  }

  getError() {
    return this.elements.lbError();
  }

  verifylandingurl(){
   cy.url().should('contain','/search');
  }

  logout(){
    this.elements.lblLanding().click();
    this.elements.btnLogout().click();
  }
}


export default LoginPage;
