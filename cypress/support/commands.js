Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            "email": "ceni@ceni.com",
            "loginPassword": "Ceni@123",
            "loginUser": "CENI"
        },
        failOnStatusCode: false
    }).then((response) => {
        cy.wrap(response.body.statusMessage.token).as('token')
        cy.wrap(response.body.statusMessage.userId).as('userId')
    });
})