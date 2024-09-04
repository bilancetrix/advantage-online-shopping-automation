const searchElements = require("../locators/searchElements")

class searchPage {

    validateListReturned() {
        cy.get(searchElements.titleItemsCount).should('be.visible')
    }

    validateItemReturned() {
        cy.get(searchElements.searchedItem).should('be.visible')
    }

    clickItemReturned() {
        cy.get(searchElements.searchedItem).click()
    }
}

module.exports = new searchPage();