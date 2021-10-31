/// <reference types="cypress" />


describe('Login',() => {
    it('Username sesuai, password kosong',() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type(' ')
        cy.get('#login-button').click()

        //Asertion
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    })

})