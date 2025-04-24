import { movimentacaoElements } from "./movimentacaoElements"
class Movimentacao {
    criarMovimentacao() {
        cy.visit("https://seubarriga.wcaquino.me/movimentacao")
    }

    tipoDeMovimentacao() {
        cy.get(movimentacaoElements.selectType).select('Receita').should('have.value', 'REC')
    }

    dataDaMovimentacao() {
        cy.get(movimentacaoElements.dataDeMovimentacao).type('27/02/2025')
    }

    dataDaPagamento() {
        cy.get(movimentacaoElements.dataDePagamento).type('27/02/2025')
    }

    descricao() {
        cy.get(movimentacaoElements.descricao).type('Produto.2')
    }

    interessado() {
        cy.get(movimentacaoElements.interessado).type('Cliente2')
    }

    valor() {
        cy.get(movimentacaoElements.valor).type('100')
    }

    conta() {
        cy.get(movimentacaoElements.selectConta).select('spfc.com').should('contain.text', 'spfc.com')
    }

    situacao() {
        cy.get(movimentacaoElements.selectSituacao).check()
    }

    salvar() {
        cy.get(movimentacaoElements.buttonSalvar).click()
    }

    validarMovimentacao(validarErro) {
        cy.get(movimentacaoElements.validarMovimentacao).should('contain.text', validarErro)
    }

}
export default Movimentacao = new Movimentacao()