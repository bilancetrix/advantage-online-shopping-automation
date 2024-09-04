const checkoutElements = require("../locators/checkoutElements")

class checkoutPage {

    clickBtnCheckout() {
        cy.get(checkoutElements.btnCheckout).click()
    }

    validateOrderPaymentView() {
        cy.get(checkoutElements.orderPaymentView).should('be.visible')
    }

    validateProductPaymentView() {
        cy.get(checkoutElements.productToBeValidated).should('be.visible')
    }
}

module.exports = new checkoutPage();