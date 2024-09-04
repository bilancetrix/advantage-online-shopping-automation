class homePage {

    elements = {
        logoHomepage: () => cy.get('.logo > a'),
        btnSearch: () => cy.get('#search > a'),
        textFieldSearch: () => cy.get('#autoComplete'),
    }

    visitHomePage() {
        cy.visit("https://advantageonlineshopping.com/");
        this.elements.logoHomepage().should('be.visible')
    }

    typeToSearch(product) {
        this.elements.btnSearch().click()
        this.elements.textFieldSearch().type(product).type('{enter}')
    }
}

module.exports = new homePage();