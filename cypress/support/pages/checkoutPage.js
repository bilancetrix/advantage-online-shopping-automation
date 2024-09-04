class checkoutPage {

    elements = {
        btnCheckout: () => cy.get('#checkOutButton'),
        orderPaymentView: () => cy.get('#orderPayment'),
        productToBeValidated: () => cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > h3.ng-binding')

    }

    clickBtnCheckout() {
        this.elements.btnCheckout().click()
    }

    validateOrderPaymentView() {
        this.elements.orderPaymentView().should('be.visible')
    }

    validateProductPaymentView() {
        this.elements.productToBeValidated().should('be.visible')
    }
}

module.exports = new checkoutPage();