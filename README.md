# Academia_Accenture2025 - Automação Web com Cypress

![Cypress](https://img.shields.io/badge/Cypress-10.12.0-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-18.17.0-green)
![License](https://img.shields.io/badge/License-MIT-blue)


## 📌 Descrição do Projeto
Automação da página [DemoQA WebTables](https://demoqa.com/webtables) utilizando **Cypress**, com foco em:

- Criar novos registros
- Editar registros existentes
- Excluir registros
- Validar todas as alterações na tabela  

O projeto utiliza **BDD com Gherkin** e boas práticas de automação, incluindo dados dinâmicos com **Faker**.

---


## 🗂 Estrutura do Projeto

<img width="367" height="680" alt="Captura de tela 2025-08-16 215757" src="https://github.com/user-attachments/assets/1873697b-8e78-453a-a4c7-615a84af7085" />

---


## 🛠 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Cucumber / Gherkin](https://cucumber.io/)
- [Faker](https://fakerjs.dev/)
- Node.js e npm

---


## 🚀 Funcionalidades Automatizadas

1. Acessar o portal DemoQA WebTables  
2. Abrir o formulário de cadastro  
3. Preencher todos os campos obrigatórios com dados válidos  
4. Submeter o formulário  
5. Validar que os dados aparecem corretamente na tabela  
6. Editar o cadastro e validar a alteração  
7. Excluir o cadastro e validar a remoção  

---


## ⚡ Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado  
- npm  
- Navegador Chrome ou Edge


### Passo a Passo

### 1️⃣ Clonar o repositório
git clone https://github.com/GeoNLima/Academia_Accenture2025.git
### 2️⃣ Acessar a pasta do projeto
cd Academia_Accenture2025
### 3️⃣ Instalar as dependências
npm install
### 4️⃣ Abrir o Cypress Test Runner (interface visual)
npx cypress open
### 5️⃣ Selecionar a feature cadastro.feature no Test Runner para executar
### 6️⃣ Ou rodar os testes direto no terminal npx cypress run



---

### 📘 Boas Práticas Aplicadas


- Comandos customizados para ações da página (cy.abreFormulario(), cy.preencheFormulario(), etc.)
- Tratamento de dados sensíveis com Cypress.env() e Faker
- Testes escritos em BDD / Gherkin
- Validações em todas as etapas: criação, edição e exclusão
- Ações na tabela percorrendo linhas, garantindo robustez com elementos dinâmicos




---


## 👩‍💻 Autor

**Georgea Lima**  
Automação Web / QA Engineer Junior  

[LinkedIn](https://www.linkedin.com/in/seu-linkedin/) | [GitHub](https://github.com/GeoNLima)



---







📄 Licença
- Este projeto está disponível sob a licença MIT.
