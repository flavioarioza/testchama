
    import carrinhoElements from '../elements/CarrinhoElements'
    const carrinho = new carrinhoElements;
    
    class validaProdutoCarrinhoSteps{
        
        validaProdutoAddCarrinho(){
            cy.get(carrinho.txtDescricaoProduto()).should('contain', 'Faded Short Sleeve T-shirts')
        }
    }

    export default validaProdutoCarrinhoSteps;