// Importa a função normalizeTitle
const { normalizeTitle, validateTaskInput } = require('../../src/validation');


//Agrupa um bloco  de testes relacionados para manter a organazição
describe ('Validação de tarefas',  () => {

test('Remove espaços do inicio e do fim do título', ()  =>{
    expect(normalizeTitle ('   Teste Unitário   ')).toBe('Teste Unitário');

});

test('retorna uma string vazia se o título for um número' ,() =>{
    expect(normalizeTitle( 12415844 )).toBe('');

});

test('retorna uma string vazia se o título for uma entrada nula', () =>{
    expect(normalizeTitle( null )).toBe('');
});

test('retorna uma string vazia se o título for uma entrada indefinido', () =>{
    expect(normalizeTitle( undefined )).toBe('');
});

 
// Casos de teste para a função validateTaskInput

  // Verifica se a função retorna uma string vazia quando a entrada é um número.
  test('A entrada recebe um número', () => {
    expect(normalizeTitle(2907)).toBe('');
  });

  // Verifica se a função lança um erro quando o título está vazio.
  test('A entrada recebe um valor vazio', () => {
    expect(() => validateTaskInput({ title: '' }))
      .toThrow('O título da tarefa é obrigatório.');
  });

  // Verifica se um título com 125 caracteres, e é rejeitado por ultrapassar o limite de 120.
  test('A entrada recebe um título com 125 caracteres', () => {
    const title = 'A'.repeat(125);

    expect(() => validateTaskInput({ title }))
      .toThrow('O título deve ter no máximo 120 caracteres.');
  });

});
