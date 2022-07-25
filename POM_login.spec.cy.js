import Login from "../TESTS/PageObject/login"

const loginpage = new Login();


describe("Cypress POM Login Suite", function(){
    it("Login with valid email and password", function(){
        
        loginpage.navigate();
        loginpage.email('anascutar@yahoo.com');
        loginpage.password('TPSKSQ3E');
        loginpage.submit();
        cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/dashboard')
    })
})

 