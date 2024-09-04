Feature: Advantage Demo

  Scenario: Usuário busca um produto existente
    Given que o usuário está na página inicial do site 'Advantage Online Shopping'
    When o usuário digita 'Mice' na barra de pesquisa e clica em buscar
    Then o sistema deve exibir uma lista de produtos relacionados ao termo de busca
    And o produto 'Mice' deve estar presente na lista de resultados

  Scenario: Usuário adiciona um produto ao carrinho
    Given que o usuário está na página de detalhes do produto 'Mice'
    When o usuário clica no botão 'Adicionar ao Carrinho'
    Then o sistema deve exibir uma confirmação de que o produto foi adicionado
    And o produto 'Mice' deve aparecer na lista de itens no carrinho

  Scenario: Usuário verifica os produtos no carrinho antes de pagar
    Given que o usuário está na página do carrinho de compras
    When o usuário clica no botão 'Checkout'
    Then o sistema deve exibir a tela de pagamento com os produtos incluídos no carrinho
    And o produto 'Mice' deve aparecer na lista de produtos na tela de pagamento