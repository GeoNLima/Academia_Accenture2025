#utf-8
#language: pt
 
Funcionalidade: Gerenciamento de Registros na tabela Demoqa

Como usuário do sistema
Quero cadastrar, editar e excluir registros
Para manter a base de dados atualizada

  Contexto:
    Dado que acesso o portal Demoqa webtables
    E acesso o formulário de cadastro
    E preencho todos os campos obrigatórios com dados válidos
    E submeto o formulário

  Cenário: Cadastrar um novo usuário e validar na tabela
    Então valido a correta aparição dos dados na tabela

  Cenário: Editar um usuário existente e validar a alteração
    Quando edito o cadastro do usuário
    E altero os dados necessários
    E salvo a edição
    Então valido que os dados foram atualizados na tabela

  Cenário: Excluir um usuário existente e validar a remoção
    Quando excluo o cadastro do usuário
    Então valido que o registro não está mais presente na tabela

 