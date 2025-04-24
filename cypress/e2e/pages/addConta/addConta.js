import { addContaElements } from "./addContaElements"
class AddConta {
    adicinarConta() {
        cy.visit("https://seubarriga.wcaquino.me/addConta")
    }

    digitarNome(addNewProduct) {
        cy.get(addContaElements.inputNome).type(addNewProduct)
    }

    salvarConta() {
        cy.get(addContaElements.buttonSalvar).click()
    }

    validarRegistroDeConta() {
        cy.get(addContaElements.validarRegistro).should('have.text','Conta adicionada com sucesso!')
    }
}
export default AddConta=new AddConta()