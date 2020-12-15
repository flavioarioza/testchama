
    import buscaProduto from '../elements/HomeElements'

    class acessaHomeSteps{    
    
        acessaSite(){
        cy.visit('http://automationpractice.com/index.php');
        }
    }

    export default acessaHomeSteps;