import Login from "../TESTS/PageObject/login"


//using fixtures
const loginpage = new Login();
let loginData;
 describe("Cypress POM Login Suite", function(){
    before(function(){
        //access fixture data
        loginpage.navigate();
        cy.fixture('loginFiles').then(function(regdata){
           loginData=regdata
        })
     })
     
    it("Login with valid email and password", function(){
        cy.log(loginData) 
        //cy.loginpage.email.type(loginData.email);
         cy.get('#email-address').type(loginData.email);       
        cy.get('#password').type(loginData.password);
        cy.get('.sc-iqAclL').click()    
        cy.url().should('include', 'dashboard') 
        cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/dashboard')
       
    })
})
