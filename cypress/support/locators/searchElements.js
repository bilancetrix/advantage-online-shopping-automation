class searchElements {

    get titleItemsCount() {
        return '.titleItemsCount';
    }

    get searchedItem() {
        return ':nth-child(1) > :nth-child(4) > .productName';
    }

}

module.exports = new searchElements();
