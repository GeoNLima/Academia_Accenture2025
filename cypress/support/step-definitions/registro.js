import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Demoqa webtables', () => {
  cy.visit('/')
})

And('acesso o formulário de cadastro', () => {
  cy.abreFormulario()
})

And('preencho todos os campos obrigatórios com dados válidos', () => {
  cy.preencheFormulario()
})

And('submeto o formulário', () => {
  cy.clicaSubmit()
})



Then('valido a correta aparição dos dados na tabela', () => {
  cy.validoDados()
})




When('edito o cadastro do usuário', () => {
  cy.clicaEditar()
})

And('altero os dados necessários', () => {
  cy.alteraFormulario()
})

And('salvo a edição', () => {
  cy.clicaSubmit()
})

Then('valido que os dados foram atualizados na tabela', () => {
  cy.validaEdicao()
})



When('excluo o cadastro do usuário', () => {
  cy.clicaExcluir()
})

Then('valido que o registro não está mais presente na tabela', () => {
  cy.validaExclusao()
})
