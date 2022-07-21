/// <reference types="cypress" />



describe('Profile Page Test',() => {
    beforeEach(() => {
      
      cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/profile')
    })

    //am refacut testarea pt profile page(ieri am facut pt overwrite, iar astazi am schimbat cu asster)
    it('Check Admin profile page ',()=>{
      cy.get('#email-address').type('anascutar@yahoo.com')
      cy.get('#password').type('TPSKSQ3E')
      cy.get('.sc-iqAclL').click()
        
        cy.url().should('include', 'dashboard') 
        cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/dashboard')
        
        cy.get('.sc-iCoGMd').click()
        cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/profile')


        cy.get('[name="firstName"]').should('have.value','Annnnna')
        cy.get('[name="lastName"]').should('have.value','Scutar')
        cy.get('[name="address"]').should('have.value','adress street')
        cy.get('[name="email"]').should('have.value','anascutar@yahoo.com')
        cy.get('[name="personalNumber"]').should('have.value','2990718015098')

      /*  cy.get('.sc-iqAclL').click()
        cy.focused().click()
        cy.contains('dashboard').click()*///for save button
    })
    //Pentru update-ul la parola am facut ub it separat
    it('Check Update Admin profile',()=>{
      cy.get('#email-address').type('anascutar@yahoo.com')
      cy.get('#password').type('TPSKSQ3E')
      cy.get('.sc-iqAclL').click()
        
        cy.url().should('include', 'dashboard') 
        cy.url().should('eq','https://victorious-wave-093b83610.1.azurestaticapps.net/#/dashboard')
        
        cy.get('.sc-iCoGMd').click()
        cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/profile')

      cy.get('#password').clear();
      cy.get('#password').type('TPSKSQ3E')
    })
})
