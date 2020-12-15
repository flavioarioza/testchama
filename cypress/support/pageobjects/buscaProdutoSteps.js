
    import buscaProduto from '../elements/HomeElements'

    const buscaproduto = new buscaProduto;

    class buscaProdutoSteps{

        digitaProdutoBusca(){
            cy.get(buscaproduto.txtBuscaProduto()).type('Faded Short Sleeve T-shirts');
        }

        clicaBotaoBusca(){
            cy.get(buscaproduto.btnBuscaProduto()).click();
        }

        validaResultadoBusca(){
            cy.get(buscaproduto.resultadoBusca()).should('be.visible');
        }
        
        clicaObterDetalheProduto(){
            cy.get(buscaproduto.resultadoBusca()).click();
        }
    }

    export default buscaProdutoSteps;