const { normalizeTitle, validateTaskInput } = require('../../src/validation');

describe('Testes de validação', () => {

  // Testes da função normalizeTitle

  test('Remove os espaços do título', () => {
    expect(normalizeTitle('  Minha tarefa  ')).toBe('Minha tarefa');
  });

  test('Retorna vazio quando recebe um número', () => {
    expect(normalizeTitle(123)).toBe('');
  });

  test('Retorna vazio quando recebe null', () => {
    expect(normalizeTitle(null)).toBe('');
  });

  // Testes da função validateTaskInput

  test('Aceita um título correto', () => {
    expect(() => validateTaskInput({ title: 'Estudar para prova' })).not.toThrow();
  });

  test('Mostra erro quando o título está vazio', () => {
    expect(() => validateTaskInput({ title: '' }))
      .toThrow('O título da tarefa é obrigatório.');
  });

  test('Mostra erro quando o título tem mais de 120 caracteres', () => {
    const title = 'B'.repeat(130);

    expect(() => validateTaskInput({ title }))
      .toThrow('O título deve ter no máximo 120 caracteres.');
  });

});