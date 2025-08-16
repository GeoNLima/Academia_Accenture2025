import { faker } from '@faker-js/faker'

const BTN_ADD = '#addNewRecordButton'
const FIRST_NAME = '#firstName'
const LAST_NAME = '#lastName'
const USER_EMAIL = '#userEmail'
const USER_AGE = '#age'
const USER_SALARY = '#salary'
const USER_DEPARTMENT = '#department'
const BTN_SUBMIT = '#submit'
const VLD_DADOS = '.rt-tbody'


Cypress.Commands.add('abreFormulario', ()=>{
    cy.get(BTN_ADD).scrollIntoView().should('be.visible').click()
})

Cypress.Commands.add('preencheFormulario', () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = faker.internet.email(firstName, lastName)

  Cypress.env('firstName', firstName)
  Cypress.env('lastName', lastName)
  Cypress.env('email', email)

  cy.get(FIRST_NAME).type(firstName)
  cy.get(LAST_NAME).type(lastName)
  cy.get(USER_EMAIL).type(email)
  cy.get(USER_AGE).type('40')
  cy.get(USER_SALARY).type('5000')
  cy.get(USER_DEPARTMENT).type('Marketing')

  cy.log(`Usuário gerado: ${firstName} ${lastName} - ${email}`)
})


Cypress.Commands.add('clicaSubmit', ()=>{
    cy.get(BTN_SUBMIT).click()
})

Cypress.Commands.add('validoDados', () => {
  const firstName = Cypress.env('firstName')
  const lastName = Cypress.env('lastName')
  const email = Cypress.env('email')

  cy.get(VLD_DADOS).contains(firstName).parent().within(() => {
    cy.contains(lastName).should('exist')
    cy.contains(email).should('exist')
  })

    cy.log(`Cadastro validado com sucesso: ${firstName} ${lastName} - ${email}`)
})



