var faker = require('faker-br');


describe('addConta', () => {
  it('Adicionando conta', () => {
    let addNewProduct = `${faker.name.jobType()}`
    cy.login('autorocha@teste.com','tricolor')
    cy.addConta(addNewProduct)
    

  })
})