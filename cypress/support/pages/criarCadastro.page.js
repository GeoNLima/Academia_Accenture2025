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

Cypress.Commands.add('preencheFormulario', ()=>{
    cy.get(FIRST_NAME).type('Neville')
    cy.get(LAST_NAME).type('Longbotton')
    cy.get(USER_EMAIL).type('neville@teste.com')
    cy.get(USER_AGE).type('45')
    cy.get(USER_SALARY).type('3000')
    cy.get(USER_DEPARTMENT).type('RH')
})

Cypress.Commands.add('clicaSubmit', ()=>{
    cy.get(BTN_SUBMIT).click()
})

Cypress.Commands.add('validoDados', (firstname, lastname, department) => {
    cy.get(VLD_DADOS).contains(firstname).parent().within(() => {
        cy.contains(lastname).should('exist')
        cy.contains(department).should('exist')
    })

    cy.log(`✅ Cadastro validado com sucesso: ${firstname} ${lastname} - ${department}`)
})



