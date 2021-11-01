/// <reference types="cypress" />


describe('Login',() => {
    it('Username dan password kosong',() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type(' ')
        cy.get('#password').type(' ')
        cy.get('#login-button').click()

        //Asertion
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    })

})