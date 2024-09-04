class cartElements {

    get btnAddToCart() {
        return '.fixedBtn > .roboto-medium';
    }

    get btnGoToCart() {
        return '#shoppingCartLink';
    }

    get btnCheckoutPopup() {
        return '#checkOutPopUp';
    }

    get itemAdded() {
        return 'a > h3.ng-binding'
    }

}

module.exports = new cartElements();
