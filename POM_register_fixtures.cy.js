import Register from "../TESTS/PageObject/register"


//using fixtures
const registerpage = new Register();
let registerData;
 describe("Cypress POM Register Suite", function(){
    before(function(){
        //access fixture data
        registerpage.navigate();
        cy.fixture('registerFiles').then(function(registerdata){
           registerData=registerdata
        })
     })
     
    it("Register with valid email and password", function(){
        cy.log(registerData) 
        //cy.loginpage.email.type(loginData.email);
        cy.get('#first-name').type(registerData.firstname);
        cy.get('#last-name') .type(registerData.lastname);
         cy.get('#email-address').type(registerData.email);       
        cy.get('#password').type(registerData.password);
        cy.get('#confirm-password').type(registerData.conffirmpassword);
        cy.get('#personal-number').type(registerData.personalnumber);
        cy.get('.sc-iqAclL').click()    
         cy.url().should('include', 'login') 
         cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
       
    })
})
