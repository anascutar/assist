/// <reference types="cypress" />

//am adaugat azi validarea pt feicare user, adica sa verific daca s-a conectat la contul corespunzator)

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
         
        
        cy.get('.sc-gtsrHT > svg').click()
        
       cy.get('.sc-gKAaRy')
        .should('contain', 'Dashboard')
        .and('contain','Issues')
        .and('contain','Users')
        .and('contain','Zones')
        .and('contain','Map')  
        
  })
    
    it('Successfull login for Validator', () => {   
      cy.get('#email-address')
        .type('validator@assist.ro')
        
        
        cy.get('#password')
        .type('assist12345.')
        
       
        cy.get('.sc-iqAclL').click()
        
        cy.url().should('include', 'issues') 
        cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/issues')
        cy.get('.sc-gtsrHT > svg').click()
        
       cy.get('.sc-gKAaRy')
        
        .and('contain','Issues')
        .and('contain','Users')
        .and('contain','Map')
       
    }) 
     
    it.only('Successfull login for Agent', () => {      
      cy.get('#email-address')
        .type('agent@assist.ro')
        
         
        cy.get('#password')
        .type('assist12345.')

        cy.get('.sc-iqAclL').click()
        cy.url().should('include', 'issues') 
        cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/issues')   
        cy.get('.sc-gtsrHT > svg').click()
        
       cy.get('.sc-gKAaRy')
        .and('contain','Issues')
        .and('contain','Map')
        

    }) 
    it('Successfull login for Citizen', () => {    
       cy.get('#email-address')
        .type('assist.citizen@gmail.com')
           
        cy.get('#password')
        .type('TU23TD75')
        
        cy.get('.sc-iqAclL').click()
        cy.url().should('include', 'issues') 
        cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/issues')  
        
        cy.get('.sc-gtsrHT > svg').click()
        
       cy.get('.sc-gKAaRy')
        .and('contain','Issues')
        .and('contain','Map')
    }) 
  })