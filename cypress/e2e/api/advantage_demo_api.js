import apiObject from "../../support/api/apiObject";

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

//-----------------------------Primeiro cenário de teste---------------------------------//
Given('a request da API de pesquisa, feito um GET com o termo {string}', (product) => {
    apiObject.searchProduct(product)
})

Then('a lista de produtos deve conter categoria que corresponda à {string}', (product) => {
    cy.get('@category').then((category) => {
        apiObject.validateProductList(category, product)
    })
})

Then('a resposta deve retornar o status code {int}', (statuscode) => {
    cy.get('@statusCode').then((status) => {
        apiObject.validateStatusCodeGET(status, statuscode)
    })
    
})
//-----------------------------------------------------------------------------------------//

//-----------------------------Segundo cenário de teste------------------------------------//
Given('a request da API de atualizar um produto', () => {
    apiObject.loginToUpdatePhoto()
})

When('eu atualizo a imagem nova cadastrada', () => {
    apiObject.updatePhotoViaPost()
})

Then('eu valido que a imagem foi cadastrada com sucesso', () => {
    cy.get('@reason').then((reason) => {
        apiObject.validateUploadedPhoto(reason, reasonUpload)
    })
})

Then('eu tenho que ver a nova imagem inserida {int}', (statuscode) => {
    cy.get('@statusCode').then((status) => {
        apiObject.validateStatusCodePOST(status, statuscode)
    })
})
//-----------------------------------------------------------------------------------------//