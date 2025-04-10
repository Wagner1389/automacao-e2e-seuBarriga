var faker = require('faker-br');
import NewUser from "./pages/newUser/newUser"
describe('Registro de novo usuário', () => {
    it('Criando novo user', () => {
        let nome = `${faker.name.firstName()} ${faker.name.lastName()} - ${faker.internet.userName()} - ${faker.date.past()}`
        NewUser.acessarNovoUsuario()
        NewUser.digitarNovoNome(nome)
        NewUser.digitarNovoEmail(faker.internet.email()) 
        NewUser.digitarSenha(faker.internet.password())
        NewUser.clickButton()
        NewUser.validarNewUser('Usuário inserido com sucesso')
    })
})