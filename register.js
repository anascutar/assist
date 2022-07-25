class Register{
    navigate(){
        cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
    }

    lastname(username){
        cy.get('#first-name')
        .clear()
        .type(username)
        return this
    }
    firstname(username){
        cy.get('#last-name')
        .clear()
        .type(username)
        return this
    }

    email(username){
        cy.get('#email-address')
        .clear()
        .type(username);
        return this
    }
    password(username){
        cy.get('#password')
        .clear()
        .type(username);
        return this
    }
    confirmpassword(username){
        cy.get('#confirm-password')
        .clear()
        .type(username)
        return this
    }
    personalnumber(username){
        cy.get('#personal-number')
        .clear()
        .type(username)
        return this
    }

   submit(){
    cy.get('.sc-iqAclL').click()
   }
}

export default Register