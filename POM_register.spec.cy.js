import Register from "../TESTS/PageObject/register"

const registerpage = new Register();

describe("Cypress POM Register suite Suite", function(){
    it("Register with valid fields", function(){
        
        registerpage.navigate();
        registerpage.firstname('Ana')
        registerpage.lastname('Scutar')
        registerpage.email('anascutar2@yahoo.com');
        registerpage.password('assist12345.');
        registerpage.confirmpassword('assist12345.')
        registerpage.personalnumber('5090321018351')
        registerpage.submit();
        cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
       
    })
})