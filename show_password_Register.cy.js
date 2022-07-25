/// <reference types="cypress" />



describe('Login Test',() => {
    beforeEach(() => {
      
      cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
    })

    it('Succesfull functionality of showing the password in Register',()=>{
    cy.get('[data-for="password"] > #password')
    .type('pas123')
    .wait(1000)
    .should('have.value','pas123')
    cy.get('#Capa_1').click()


        cy.get('#confirm-password')
        .type('pas123')
          .wait(1000)
          .should('have.value','pas123')
          cy.get('[data-for="confirmPassword"] > #Capa_1 > :nth-child(1) > g > path').click({force:true})
  
      })
})

