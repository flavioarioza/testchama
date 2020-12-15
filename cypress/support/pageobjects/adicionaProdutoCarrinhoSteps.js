
    import Produto from '../elements/ProdutoElements'
    import carrinhoPedido from '../elements/CarrinhoElements'

    const produto = new Produto;
    const carrinho = new carrinhoPedido;

    class adicionaProdutoCarrinhoSteps{
                
        visualizarDetalheProduto(){
            cy.get(produto.txtDetalheProduto()).should('be.visible');
        }

        adicionarProdutoCarrinho(){
            cy.get(produto.btnAddProdutoCarrinho()).click();
        }
        
        continuarComprando(){
                cy.get(produto.btnContinuarComprando()).click();
        }

        adicionarCarrinho(){
            cy.get(carrinho.btnAddProdutoCarrinho().click());
        }

    }

    export default adicionaProdutoCarrinhoSteps;