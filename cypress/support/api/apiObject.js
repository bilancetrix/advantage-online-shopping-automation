class apiObject {

  constructor() {
    this.apiUrlSearch = 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search';
  }

  searchProduct(product) {
    cy.request({
      method: 'GET',
      url: `${this.apiUrlSearch}?name=${product}&quantityPerEachCategory=-1`,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      cy.wrap(response.status).as('statusCode')
      cy.wrap(response.body[0].categoryName).as('category')
    });
  }

  validateProductList(categoryName, product) {
    expect(categoryName).to.eq(product)
  }

  validateStatusCodeGET(status, statuscode) {
    expect(status).to.eq(statuscode)
  }

  loginToUpdatePhoto(){
    cy.login()
  }

  updatePhotoViaPost() {
    cy.get('@token').then((token) => {
      cy.get('@userId').then((userId) => {
        cy.fixture('image.jpg', 'binary').then(data => {
          const blob = Cypress.Blob.binaryStringToBlob(data);
          const formData = new FormData();
          formData.append('file', blob, 'image.jpg');
          cy.request({
            method: 'POST',
            url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/update/blue?product_id=26`,
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`
            },
          body: formData
          }).then((response) => {
            cy.wrap(response.status).as('statusCode')
            cy.wrap(response.reason).as('reason')
          });
        })
      })
    })
  }

  validateUploadedPhoto(reason, reasonUpload) {
    expect(reason).to.eq(reasonUpload)
  }

  validateStatusCodePOST(status, statuscode) {
    expect(status).to.eq(statuscode)
  }
}

module.exports = new apiObject();