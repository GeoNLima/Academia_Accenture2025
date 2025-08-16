import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'


Given('que acesso o portal Demoqa webtables', ()=>{
    cy.visit('/')
})

When('clico no botão de adicionar', ()=>{
    cy.abreFormulario()
})

And('preencho todos os campos obrigatórios com dados válidos', ()=>{
    cy.preencheFormulario()
})

And('clico em Submit realizo o cadastro', ()=>{
    cy.clicaSubmit()
})

Then('valido a correta aparição dos dados na tabela', ()=>{
   cy.validoDados()
})

