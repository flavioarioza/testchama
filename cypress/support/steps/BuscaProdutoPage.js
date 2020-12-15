/* global Given, Then, When */

import acessaHomeSteps from '../pageobjects/acessaHomeSteps'
import adicionaProdutoCarrinhoSteps from '../pageobjects/adicionaProdutoCarrinhoSteps'
import buscaProdutoSteps from '../pageobjects/buscaProdutoSteps'

const acessaHome = new acessaHomeSteps
const adicionaProduto = new adicionaProdutoCarrinhoSteps
const buscaProduto = new buscaProdutoSteps

Given("acesso o site automation pratice", () => {
    acessaHome.acessaSite();
})

When("eu pesquiso pelo produto", () => {
    buscaProduto.digitaProdutoBusca();
    buscaProduto.clicaBotaoBusca();
    buscaProduto.validaResultadoBusca();
    buscaProduto.clicaObterDetalheProduto();
})

Then("eu vejo o produto como resultado da pesquisa", () => {
    buscaProduto.validaResultadoBusca();
})