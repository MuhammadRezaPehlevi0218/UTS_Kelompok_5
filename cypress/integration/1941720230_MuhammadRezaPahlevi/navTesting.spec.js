/// <reference types="cypress" />

context('Login Testing', () => {
  const username='standard_user'
  const password='secret_sauce'
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(`[data-test=username]`).type(username);
    cy.get( `[data-test=password]`).type(password);
    cy.get(`#login-button`).should('be.visible').click();
  })

  it('Data Log in Benar', () => {
    
  })
})