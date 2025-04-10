// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Login from "../e2e/pages/login/login"
Cypress.Commands.add('login', (email, senha) => {

    Login.acessarLogin()
    Login.digitarEmail(email)
    Login.digitarSenha(senha)
    Login.clickButton()
    Login.validarLogin('Bem vindo, Automação Rocha!')

})

import AddConta from "../e2e/pages/addConta/addConta"
Cypress.Commands.add('addConta', (addNewProduct) => {

    AddConta.adicinarConta()
    AddConta.digitarNome(addNewProduct)
    AddConta.salvarConta()
    AddConta.validarRegistroDeConta()
})

import Movimentacao from "../e2e/pages/criarMovimentacao/movimentacao"
Cypress.Commands.add('criarMovimentacao', (dataMovi, dataPay, desc, inter, valor) => {

    Movimentacao.criarMovimentacao()
    Movimentacao.tipoDeMovimentacao()
    Movimentacao.dataDaMovimentacao(dataMovi)
    Movimentacao.dataDaPagamento(dataPay)
    Movimentacao.descricao(desc)
    Movimentacao.interessado(inter)
    Movimentacao.valor(valor)
    Movimentacao.conta()
    Movimentacao.situacao()
    Movimentacao.salvar()
    Movimentacao.validarMovimentacao('Movimentação adicionada com sucesso!')


})