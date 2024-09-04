import homePage from "../../support/pages/homePage";
import searchPage from "../../support/pages/searchPage";
import cartPage from "../../support/pages/cartPage";
import checkoutPage from "../../support/pages/checkoutPage";

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

//-----------------------------Primeiro cenário de teste---------------------------------//
Given("que o usuário está na página inicial do site 'Advantage Online Shopping'", () => {
    homePage.visitHomePage()
});

When("o usuário digita 'Mice' na barra de pesquisa e clica em buscar", () => {
    homePage.typeToSearch('Mice')
});

Then("o sistema deve exibir uma lista de produtos relacionados ao termo de busca", () => {
    searchPage.validateListReturned()
});

Then("o produto 'Mice' deve estar presente na lista de resultados", () => {
    searchPage.validateItemReturned()
})
//-----------------------------------------------------------------------------------------//

//-----------------------------Segundo cenário de teste------------------------------------//
Given("que o usuário está na página de detalhes do produto 'Mice'", () => {
    homePage.visitHomePage()
    homePage.typeToSearch('Mice')
    searchPage.validateListReturned()
    searchPage.validateItemReturned()
    searchPage.clickItemReturned()
});

When("o usuário clica no botão 'Adicionar ao Carrinho'", () => {
    cartPage.addingToCart()
});

Then("o sistema deve exibir uma confirmação de que o produto foi adicionado", () => {
    cartPage.validateAddedToCart()
})

Then("o produto 'Mice' deve aparecer na lista de itens no carrinho", () => {
    cartPage.validateItemAdded()
})
//-----------------------------------------------------------------------------------------//

//-----------------------------Terceiro cenário de teste------------------------------------//
Given("que o usuário está na página do carrinho de compras", () => {
    homePage.visitHomePage()
    homePage.typeToSearch('Mice')
    searchPage.validateListReturned()
    searchPage.validateItemReturned()
    searchPage.clickItemReturned()
    cartPage.addingToCart()
    cartPage.validateAddedToCart()
    cartPage.validateItemAdded()
    cartPage.clickGoToCart()
})

When("o usuário clica no botão 'Checkout'", () => {
    checkoutPage.clickBtnCheckout()
})

Then("o sistema deve exibir a tela de pagamento com os produtos incluídos no carrinho", () => {
    checkoutPage.validateOrderPaymentView()
})

Then("o produto 'Mice' deve aparecer na lista de produtos na tela de pagamento", () => {
    checkoutPage.validateProductPaymentView()
})
//-----------------------------------------------------------------------------------------//