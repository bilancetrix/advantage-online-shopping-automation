class checkoutElements {
    
    get btnCheckout() {
        return '#checkOutButton';
    }

    get orderPaymentView() {
        return '#orderPayment';
    }

    get productToBeValidated() {
        return '#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > h3.ng-binding';
    }

}

module.exports = new checkoutElements();