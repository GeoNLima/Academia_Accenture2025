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
const BTN_EDIT = '.rt-tr-group'
const BTN_DELETE = '[title="Delete"]'
const CEL_TABLE = '.rt-td'


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

  cy.log(`🛠️Usuário gerado: ${firstName} ${lastName} - ${email}`)
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

    cy.log(`👌Cadastro validado com sucesso: ${firstName} ${lastName} - ${email}`)
})

Cypress.Commands.add('clicaEditar', ()=>{
    cy.get(BTN_EDIT).first().find('[title="Edit"]').click()
})

Cypress.Commands.add('alteraFormulario', () => {
  const newEmail = faker.internet.email()
  const newSalary = faker.number.int({ min: 3000, max: 15000 })

  Cypress.env('newEmail', newEmail)
  Cypress.env('newSalary', newSalary)

  cy.get(USER_EMAIL).clear().type(newEmail)
  cy.get(USER_SALARY).clear().type(newSalary)

  cy.log(`✏️Usuário editado: novo Email: ${newEmail} e novo Salário: ${newSalary}`)
})

Cypress.Commands.add('validaEdicao', () => {
  const newEmail = Cypress.env('newEmail')
  const newSalary = Cypress.env('newSalary')

  cy.get(VLD_DADOS).contains(newEmail).parent().within(() => {
    cy.contains(newSalary).should('exist')
  })

  cy.log(`✏️Edição validada com sucesso: novo Email: ${newEmail} e novo salário: ${newSalary}`)
})



Cypress.Commands.add('clicaExcluir', () => {
  const email = Cypress.env('newEmail') || Cypress.env('email')

  cy.log(`⏳Tentando excluir o usuário: ${email}`)

    cy.get(VLD_DADOS).find(BTN_EDIT).each(($row) => {
    cy.wrap($row).find(CEL_TABLE).eq(2).then(($cell) => {
      if ($cell.text() === email) {
        cy.wrap($row).find(BTN_DELETE).click({ force: true })
        
        cy.log(`🗑️ Exclusão realizada: ${email}`)
      }
    })
  })
})


Cypress.Commands.add('validaExclusao', () => {
  const email = Cypress.env('newEmail') || Cypress.env('email')

  cy.get(VLD_DADOS).should('not.contain.text', email)

  cy.log(`👍 Validação de exclusão concluída: ${email} não está mais presente na tabela`)
})
