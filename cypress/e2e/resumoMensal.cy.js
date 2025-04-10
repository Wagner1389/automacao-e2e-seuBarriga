
import ResumoMensal from "./pages/resumoMensal/resumoMensal"
describe('Resumo mensal', () => {
    it('Realizando resumo mensal', () => {
        cy.login('autorocha@teste.com', 'tricolor')
        ResumoMensal.criandoResumoMensal()
        ResumoMensal.selectMes()
        ResumoMensal.selectAno()
        ResumoMensal.buscar()
        ResumoMensal.deletar()
        ResumoMensal.validarDelete('Movimentação removida com sucesso!')

    })



})