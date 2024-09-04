class searchPage {

    elements = {
        titleItemsCount: () => cy.get('.titleItemsCount'),
        searchedItem: () => cy.get(':nth-child(1) > :nth-child(4) > .productName')
    }

    validateListReturned() {
        this.elements.titleItemsCount().should('be.visible')
    }

    validateItemReturned() {
        this.elements.searchedItem().should('be.visible')
    }

    clickItemReturned() {
        this.elements.searchedItem().click()
    }
}

module.exports = new searchPage();