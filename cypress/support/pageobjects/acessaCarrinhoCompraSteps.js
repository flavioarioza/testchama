import acessaCarrinhoCompra from '../elements/CarrinhoElements'

    const acessaCarrinho = new acessaCarrinhoCompra;

    class acessaCarrinhoCompraSteps{

        acessarCarrinhoCompra(){
            cy.get(acessaCarrinho.btnAcessarCarrinho()).click();
        }        

        validaItemCarrinho(){
            cy.get(acessaCarrinho.txtDescricaoProduto()).should('be.visible');
        }
    }
    
    export default acessaCarrinhoCompraSteps;