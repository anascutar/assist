/// <reference types="cypress" />



describe('Login Test',() => {
    beforeEach(() => {
      
      cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
    })
    it('Login page style',()=>{
        
       // cy.get('.completed').should('have.css', 'text-decoration', 'line-through')
        cy.get('.sc-iqAclL').should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('.sc-iqAclL').should('have.css', 'background-color', 'rgb(11, 37, 89)') 
    })
    
})