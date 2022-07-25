/// <reference types="cypress" />



describe('Login Test',() => {
    beforeEach(() => {
      
      cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
    })




    it('Succesfull functionality of showing the password in LOGIN',()=>{
      cy.get('#email-address')
        .type('kai@admin.com')
        .wait(1000)
        .should('have.value', 'kai@admin.com');
        
        cy.get('#password')
        .type('pas123')
        .wait(1000)
        .should('have.value','pas123')


      cy.get('#Capa_1').click()
      

    })

    
})
