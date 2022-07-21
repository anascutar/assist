/// <reference types="cypress" />



describe('Login Test',() => {
    beforeEach(() => {
      
      cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
    })
  it('SUcessfull ADMIN login ',()=>{
    cy.get('#email-address').type('anascutar@yahoo.com')       
        cy.get('#password').type('TPSKSQ3E')
        cy.get('.sc-iqAclL').click()    
        cy.url().should('include', 'dashboard') 
        cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/dashboard')
         
        .wait(1000)
        cy.get('.sc-gtsrHT > svg > [y1="18"]').click()
        .wait(1000)

        
  })
    
    it('Successfull login for Validator', () => {   
      cy.get('#email-address')
        .type('validator@assist.ro')
        .wait(3000)
        
        cy.get('#password')
        .type('assist12345.')
        .wait(3000)
       
        cy.get('.sc-iqAclL').click()
        .wait(3000)
        cy.url().should('include', 'issues') 
        cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/issues')
       
    }) 
     
    it('Successfull login for Agent', () => {      
      cy.get('#email-address')
        .type('agent@assist.ro')
        .wait(3000)
         
        cy.get('#password')
        .type('assist12345.')
       
        cy.get('.sc-iqAclL').click()
        cy.url().should('include', 'issues') 
        cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/issues')       
    }) 
    it('Successfull login for Citizen', () => {    
       cy.get('#email-address')
        .type('assist.citizen@gmail.com')
           
        cy.get('#password')
        .type('TU23TD75')
        
        cy.get('.sc-iqAclL').click()
        cy.url().should('include', 'issues') 
        cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/issues')     
    }) 
  })