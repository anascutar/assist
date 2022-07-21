/// <reference types="cypress" />



describe('Login Test',() => {
    beforeEach(() => {
      
      cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
    })
    it('Login page style',()=>{
        
       //am facut testarea pt desisgn
        cy.get('.sc-iqAclL').should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('.sc-iqAclL').should('have.css', 'background-color', 'rgb(11, 37, 89)') 
        cy.get('#email-address').should('have.css', 'padding', '16px')
        cy.get('.sc-kmIPcE').should('have.css', 'font-size', '32px')
        cy.get('.sc-kmIPcE').should('have.css', 'font-family', '"Open Sans", sans-serif')

    })
    
})
