/// <reference types="cypress" />

const uuid = () => Cypress._.random(0, 1e6)

const id = uuid()

const testname = `testname${id}@yahoo.com`

describe('Register Test',() => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
  })

  it.only('Successfull register for Admin user', () => {
     
    cy.get('#first-name').type('Kai')
    cy.get('#last-name') .type('Huening')
    cy.get('#email-address').type(testname)
    cy.get('[data-for="password"] > #password').type('pas123')
    cy.get('#confirm-password').type('pas123')
    cy.get('#personal-number').type('5090321018351')
    cy.get('.sc-iqAclL').click()
    cy.contains('Register').click()
   cy.url().should('include','login') 
   cy.url().should('include','https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
  

  })
  
  it('Successfull register for Validator user', () => {
     
    cy.get('#first-name')
      .type('Terry')
      
      .should('have.value', 'Terry');

      cy.get('#last-name')
      .type('Chu')
      
      .should('have.value', 'Chu');

      cy.get('#email-address')
    .type('terry@validator.com')
    
    .should('have.value', 'terry@validator.com');

    cy.get('[data-for="password"] > #password')
    .type('pas124')
    
    .should('have.value','pas124')

    cy.get('#confirm-password')
    .type('pas124')
    
    .should('have.value','pas124')

    cy.get('#personal-number')
  .type('5000718019700')
  
  .should('have.value', '5000718019700')

  cy.get('.sc-iqAclL').click()
  
  cy.url().should('include', 'login') 
  cy.url().should('include','https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')

  })
  it('Successfull register for Agent user', () => {
     
    cy.get('#first-name')
      .type('Daniel')
      
      .should('have.value', 'Daniel');

      cy.get('#last-name')
      .type('Kang')
      
      .should('have.value', 'Kang');

      cy.get('#email-address')
    .type('daniel@agent.com')
    
    .should('have.value', 'daniel@agent.com');

    cy.get('[data-for="password"] > #password')
    .type('pas125')
    
    .should('have.value','pas125')

    cy.get('#confirm-password')
    .type('pas125')
    
    .should('have.value','pas125')

    cy.get('#personal-number')
  .type('5001224018319')
  
  .should('have.value', '5001224018319')

  cy.get('.sc-iqAclL').click() 
  
  cy.url().should('include', 'login') 
  cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')


  })
  it('Successfull register for Citizen user', () => {
    cy.get('#first-name')
        .type('Ben')
        .should('have.value', 'Ben');
  

      cy.get('#last-name')
      .type('Park')
      .should('have.value', 'Park');

      cy.get('#email-address')
    .type('assist.citizen@gmail.com')
   
    

    cy.get('[data-for="password"] > #password')
    .type('assist12345.')
 
    cy.get('#confirm-password')
    .type('assist12345.')
   
    .should('have.value','assist12345.')

    cy.get('#personal-number')
  .type('5991224015121')
  .should('have.value', '5991224015121')

  cy.get('.sc-iqAclL').click() 
  cy.url().should('include', 'login') 
  cy.url().should('include','https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')


  })



})