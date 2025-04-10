import { loginElements } from "./loginElements"
class Login {
    acessarLogin() {
        cy.visit("https://seubarriga.wcaquino.me/login")
    }
    
    digitarEmail(email) {
        cy.get(loginElements.inputEmail).type(email)
    }


    digitarSenha(senha) {
        cy.get(loginElements.inputSenha).type(senha)
    }

    clickButton() {
        cy.get(loginElements.buttonLogin).click()
    }

    validarLogin(validarSucesso) {
        cy.get(loginElements.validarLogin).should('have.text', validarSucesso)
    }

    erroSenha() {
        cy.get(loginElements.inputSenha).type("123")
    }



}
export default Login = new Login()