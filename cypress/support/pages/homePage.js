const homeElements = require('../locators/homeElements')

class homePage {

    visitHomePage() {
        cy.visit("https://advantageonlineshopping.com/");
        cy.get(homeElements.logoHomepage).should('be.visible')
    }

    typeToSearch(product) {
        cy.get(homeElements.btnSearch).click()
        cy.get(homeElements.textFieldSearch).type(product).type('{enter}')
    }
}

module.exports = new homePage();