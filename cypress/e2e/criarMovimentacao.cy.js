var faker = require('faker-br');
import Movimentacao from "./pages/criarMovimentacao/movimentacao"

describe('movimentacao', () => {
    it('Criando Movimentação', () => {
        
        cy.login('autorocha@teste.com', 'tricolor')
        let dataMovi = `${faker.date.recent()}`
        let dataPay = `${faker.date.recent()}`
        let desc = `${faker.name.jobTitle()}`
        let inter = `${faker.name.jobTitle()}`
        let valor = `${faker.finance.amount()}`
        cy.criarMovimentacao(dataMovi, dataPay, desc, inter, valor)
        //     Movimentacao.criarMovimentacao()
        //     Movimentacao.tipoDeMovimentacao()
        //     Movimentacao.dataDaMovimentacao()
        //     Movimentacao.dataDaPagamento()
        //     Movimentacao.descricao()
        //     Movimentacao.interessado()
        //     Movimentacao.valor()
        //     Movimentacao.conta()
        //     Movimentacao.situacao()
        //     Movimentacao.salvar()
        //     Movimentacao.validarMovimentacao('Movimentação adicionada com sucesso!')

    })

    it('Erro Valor', () => {

        cy.login('autorocha@teste.com', 'tricolor')
        cy.criarMovimentacao()
        Movimentacao.criarMovimentacao()
        Movimentacao.tipoDeMovimentacao()
        Movimentacao.dataDaMovimentacao()
        Movimentacao.dataDaPagamento()
        Movimentacao.descricao()
        Movimentacao.interessado()
        Movimentacao.conta()
        Movimentacao.situacao()
        Movimentacao.salvar()
        Movimentacao.validarMovimentacao('Valor é obrigatório')


    })

    it('Erro data de movimentação', () => {


        cy.login('autorocha@teste.com', 'tricolor')
        cy.criarMovimentacao()
        Movimentacao.criarMovimentacao()
        Movimentacao.tipoDeMovimentacao()
        Movimentacao.dataDaPagamento()
        Movimentacao.descricao()
        Movimentacao.interessado()
        Movimentacao.conta()
        Movimentacao.situacao()
        Movimentacao.salvar()
        Movimentacao.validarMovimentacao('Data da Movimentação é obrigatório')
    })

    it('Erro data do pagamento', () => {


        cy.login('autorocha@teste.com', 'tricolor')
        cy.criarMovimentacao()
        Movimentacao.criarMovimentacao()
        Movimentacao.tipoDeMovimentacao()
        Movimentacao.dataDaMovimentacao()
        Movimentacao.descricao()
        Movimentacao.interessado()
        Movimentacao.conta()
        Movimentacao.situacao()
        Movimentacao.salvar()
        Movimentacao.validarMovimentacao('Data do pagamento é obrigatório')
    })

    it('Erro descrição', () => {


        cy.login('autorocha@teste.com', 'tricolor')
        // Login.digitarEmail('autorocha@teste.com')
        // Login.digitarSenha('tricolor')
        // Login.clickButton()
        // Login.acessarLogin()
        Movimentacao.criarMovimentacao()
        Movimentacao.tipoDeMovimentacao()
        Movimentacao.dataDaMovimentacao()
        Movimentacao.dataDaPagamento()
        Movimentacao.interessado()
        Movimentacao.conta()
        Movimentacao.situacao()
        Movimentacao.salvar()
        Movimentacao.validarMovimentacao('Descrição é obrigatório')
    })

    it('Erro interessado', () => {

        cy.login('autorocha@teste.com', 'tricolor')
        //Login.acessarLogin()
        //Login.digitarEmail('autorocha@teste.com')
        //Login.digitarSenha('tricolor')
        //Login.clickButton()
        Movimentacao.criarMovimentacao()
        Movimentacao.tipoDeMovimentacao()
        Movimentacao.dataDaMovimentacao()
        Movimentacao.descricao()
        Movimentacao.dataDaPagamento()
        Movimentacao.conta()
        Movimentacao.situacao()
        Movimentacao.salvar()
        Movimentacao.validarMovimentacao('Interessado é obrigatório')

        //FAZER O FAKER PARA MOVIMENTACAO OK
        //FAZER RESUMO MENSAL
        //FAZER TESTE MANUAL DE LOGAR, CRIAR CONTA E MOVIMENTAÇÃO
    })

})