/// <reference types="cypress" />


describe('Checkout', () => {
    it('checkout scenario with sorting', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test=product_sort_container]').select('za')
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Dwi Nur')
        cy.get('#last-name').type('Oktaviani')
        cy.get('#postal-code').type('67272')
        cy.get('#continue').click()
        
        //Asertion
        cy.get('[class="header_secondary_container"]]')
    })
})