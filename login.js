class Login {
  navigate() {
    cy.visit("https://victorious-wave-093b83610.1.azurestaticapps.net/#/login");
  }

  /*get email() {
    return cy.get("#email-address");
  }*/

  email(username){
      cy.get('#email-address')
      .clear()
      .type(username);
      return this
  }
  password(username) {
    cy.get("#password").clear().type(username);
    return this;
  }
  submit() {
    cy.get(".sc-iqAclL").click();
  }
}

export default Login;
