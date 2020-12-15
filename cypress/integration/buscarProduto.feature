Feature: Busca produto no site

    Scenario: Buscar produto no site
        Given acesso o site automation pratice
        When eu pesquiso pelo produto
        Then eu vejo o produto como resultado da pesquisa