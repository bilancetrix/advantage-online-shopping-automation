const cartElements = require("../locators/cartElements")

class cartPage {

    addingToCart() {
        cy.get(cartElements.btnAddToCart).click()
    }

    clickGoToCart() {
        cy.get(cartElements.btnGoToCart).click()
    }

    validateAddedToCart() {
        cy.get(cartElements.btnCheckoutPopup).should('be.visible')
    }

    validateItemAdded() {
        cy.get(cartElements.itemAdded).should('be.visible')
    }

    clickToCheckoutPopup() {
        cy.get(cartElements.btnCheckoutPopup).click()
    }
}

module.exports = new cartPage();