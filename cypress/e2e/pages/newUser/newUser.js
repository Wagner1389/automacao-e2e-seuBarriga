import { newUserElements } from "./newUserElements"
class NovoUser {
    acessarNovoUsuario() {
        cy.visit("https://seubarriga.wcaquino.me/cadastro")
    }

    digitarNovoNome(novoNome) {
        cy.get(newUserElements.inputNovoNome).type(novoNome)
    }

    digitarNovoEmail(novoEmail) {
        cy.get(newUserElements.inputNovoEmail).type(novoEmail)
    }


    digitarSenha(novaSenha) {
        cy.get(newUserElements.inputNovaSenha).type(novaSenha)
    }

    clickButton() {
        cy.get(newUserElements.buttonLogin).click()
    }

    validarNewUser(validarNewUser) {
            cy.get(newUserElements.validarNewUser).should('contain.text', validarNewUser)
        }


}
export default NovoUser = new NovoUser()