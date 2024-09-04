class cartPage {

    elements = {
        btnAddToCart: () => cy.get('.fixedBtn > .roboto-medium'),
        btnGoToCart: () => cy.get('#shoppingCartLink'),
        btnCheckoutPopup: () => cy.get('#checkOutPopUp'),
        itemAdded: () => cy.get('a > h3.ng-binding')
    }

    addingToCart() {
        this.elements.btnAddToCart().click()
    }

    clickGoToCart() {
        this.elements.btnGoToCart().click()
    }

    validateAddedToCart() {
        this.elements.btnCheckoutPopup().should('be.visible')
    }

    validateItemAdded() {
        this.elements.itemAdded().should('be.visible')
    }

    clickToCheckoutPopup() {
        this.elements.btnCheckoutPopup().click()
    }
}

module.exports = new cartPage();