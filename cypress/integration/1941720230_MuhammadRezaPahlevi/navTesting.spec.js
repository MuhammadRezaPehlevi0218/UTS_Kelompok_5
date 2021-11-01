/// <reference types="cypress" />

context('Testing side bar 1941720230_MuhammadRezaPahlevi', () => {
  const username='standard_user'
  const password='secret_sauce'
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(`[data-test=username]`).type(username);
    cy.get( `[data-test=password]`).type(password);
    cy.get(`#login-button`).should('be.visible').click();
  })

  it('Testing Bugger Button 1941720230_MuhammadRezaPahlevi', () => {
    cy.get(`#react-burger-menu-btn`).should('be.visible').click();
    cy.get('#inventory_sidebar_link').should('be.visible');
  })

  it('Testing side bar all item 1941720230_MuhammadRezaPahlevi', () => {
    cy.get(`#react-burger-menu-btn`).should('be.visible').click();
    cy.get(`#inventory_sidebar_link`).should('be.visible').click();
    cy.get(`#inventory_container`).should('be.visible');
  })

  it('Testing side bar About 1941720230_MuhammadRezaPahlevi', () => {
    cy.get(`#react-burger-menu-btn`).should('be.visible').click();
    cy.get(`#about_sidebar_link`).should('be.visible').click();
    cy.get(`#entry-3qDFahnypj1KkiORyU1Zyh`).should('be.visible');
  })

  it('Testing side bar Logout 1941720230_MuhammadRezaPahlevi', () => {
    cy.get(`#react-burger-menu-btn`).should('be.visible').click();
    cy.get(`#logout_sidebar_link`).should('be.visible').click();
    cy.get(`#login_button_container`).should('be.visible');
  })

  it('Testing side bar Reset App State 1941720230_MuhammadRezaPahlevi', () => {
    cy.get(`#add-to-cart-sauce-labs-backpack`).should('be.visible').click();
    cy.get(`#react-burger-menu-btn`).should('be.visible').click();
    cy.get(`#reset_sidebar_link`).should('be.visible').click();
    cy.get(`#shopping_cart_container`).should('be.visible').click();
    cy.get(`cart_quantity`).should('1');
  })
})