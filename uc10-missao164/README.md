# UC10 - Realizar Testar nas Aplicações Desenvolvidas
## ana kesia de oliveira da costa  

## Descrição

- Aplicação de controle de tarefas (CRUD).
- Cadastra tarefas: INSERT -> CREATE
- Consultar/listar tarefas: SELECT -> READ
- Atualiza tarefas: UPDATE -> UPDATE
- Exclui tarefas: DELETE -> DELETE

## Tecnologias

| Tecnologia | Função | Versão | Comando |
|----------- | ------ | ------ | ------- |
| HTML       | Estrutura/esqueleto da página web | Não possui versão própria. É uma linguagem padronizada; pode-se consultar a versão do padrão HTML na documentação. | ---- |
| CSS        | Estilização/design da página      | Não possui uma versão única instalada. O CSS evolui por módulos. | 
| JavaScript | Interatividade/comportamento      |
| Node.js    | Ambiente de execução que permite executar o JS no servidor |
| Jest       | Framework de testes automatizados |
| SQLite     | Banco de dados relacional         |
| Express    | Framework back-end que recebe requisições do front-end     |
| Supertest  | Ferramenta que simula requisições HTTP para testar a sua API |


# Testes

## Testes Unitários

| Caso de teste |  Entrada | Saída esperada |
| ------------- | -------- | -------------- |
| Se a descrição for uma string, remove os espaços em branco senão, retorna uma string vazia | "   segunda-feira   "  /  15362  | "segunda-feira"   /   "" |  
| Se o título estiver vazio, avisa que o título é obrigatório | "" | O título da tarefa é obrigatório |  
| Se o título tiver mais de 120 caracteres, gera um erro | Título com mais de 120 caracteres | O título deve no máximo ter 120 caracteres |  

