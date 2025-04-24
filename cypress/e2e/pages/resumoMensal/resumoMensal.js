import { resumoMensalElements } from "./resumoMensalElements"
class ResumoMensal {
    criandoResumoMensal() {
        cy.visit("https://seubarriga.wcaquino.me/extrato")
    }

    selectMes() {
        cy.get(resumoMensalElements.selectMes).select('Fevereiro').should('have.value', '02')
    }

    selectAno() {
        cy.get(resumoMensalElements.selectAno).select('2025').should('have.value', '2025')
    }

    buscar() {
        cy.get(resumoMensalElements.buttonBuscar).click()
    }

    deletar() {
        cy.get('#tabelaExtrato tbody tr') // Seleciona todas as linhas da tabela
            .first() // Pega a primeira linha
            .find('a[href^="/removerMovimentacao"]') // Localiza o link de remoção
            .click();
    }

    validarDelete(validarDelete) {
        cy.get(resumoMensalElements.validarDelete).should('have.text', validarDelete)
    }
    //deletar() {
    //cy.get(resumoMensalElements.buttonDelete).click()
    //}
}
export default ResumoMensal = new ResumoMensal()