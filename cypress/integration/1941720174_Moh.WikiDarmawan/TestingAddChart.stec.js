/// <reference types="cypress" />

context('Testing side bar 1941720174_Moh.wikiDarmawan', () => {
    const username='standard_user'
    const password='secret_sauce'
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
      cy.get(`[data-test=username]`).type(username);
      cy.get( `[data-test=password]`).type(password);
      cy.get(`#login-button`).should('be.visible').click();
    })
  
    it('Testing add Button 1941720174_Moh.wikiDarmawan', () => {
      cy.get("add-to-cart-sauce-labs-backpack").should('be.visible').click();
      
    })

    it('Testing side bar all item 1941720230_MuhammadRezaPahlevi', () => {
        cy.get("remove-sauce-labs-backpack").should('be.visible').click();
    })
  
    
  })