/// <reference types="cypress" />



describe('Profile Page Test',() => {
    beforeEach(() => {
      
      cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/profile')
    })


    it('Admin profile page succes',()=>{
      cy.get('#email-address').type('anascutar@yahoo.com')
        .wait(1000)
        cy.get('#password').type('TPSKSQ3E')
        .wait(1000)
        cy.get('.sc-iqAclL').click()
        .wait(1000)
        cy.url().should('include', 'dashboard') 
        cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/dashboard')
        
        cy.get('.sc-iCoGMd').click()
        cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/profile')


        cy.get('[name="firstName"]').clear()
        cy.get('[name="firstName"]').type('Annnnna')
        .wait(1000)

        cy.get('[name="lastName"]').clear()
        cy.get('[name="lastName"]').type('Scutar')
        .wait(1000)

        cy.get('[name="address"]').clear()
        cy.get('[name="address"]').type('adress street')
        .wait(1000)

        cy.get('[name="email"]').clear()
        cy.get('[name="email"]').type('anascutar@yahoo.com')
        .wait(1000)
        cy.get('#password').type('TPSKSQ3E')

        cy.get('[name="personalNumber"]').clear()
        cy.get('[name="personalNumber"]').type('2990718015098')

        cy.get('.sc-iqAclL').click()
        cy.focused().click()
        cy.contains('dashboard').click()
    })
})
