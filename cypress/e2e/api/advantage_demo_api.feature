Feature: Advantage Demo

  Scenario: Usuário busca um produto via API
    Given a request da API de pesquisa, feito um GET com o termo "Mice"
    Then a lista de produtos deve conter categoria que corresponda à "MICE"
    And a resposta deve retornar o status code 200

  Scenario: Atualiza imagem de um produto
    Given a request da API de atualizar um produto
    When eu atualizo a imagem nova cadastrada
    Then eu tenho que ver a nova imagem inserida 200
