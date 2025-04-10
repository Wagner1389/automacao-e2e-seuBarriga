import Login from "./pages/login/login"
describe('login', () => {
  it('login realizado com sucesso', () => {
    Login.acessarLogin()
    Login.digitarEmail('autorocha@teste.com')
    Login.digitarSenha('tricolor')
    Login.clickButton()
    Login.validarLogin('Bem vindo, Automação Rocha!')
  })

  it('login erro', () => {
    Login.acessarLogin()
    Login.digitarEmail('teste@teste.com')
    Login.digitarSenha('123')
    Login.clickButton()
    Login.validarLogin('Problemas com o login do usuário')
  })

})