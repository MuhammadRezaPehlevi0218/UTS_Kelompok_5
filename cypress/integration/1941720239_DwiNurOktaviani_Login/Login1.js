/// <reference types="cypress" />


describe('Login',() => {
    it('UserName dan Password sesuai',() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        //Asertion
        cy.title().should('include', 'Swag Labs')
    })

})