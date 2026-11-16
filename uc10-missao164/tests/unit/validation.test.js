// Importa a função'normalizeTitle'
const {normalizeTitle} = require('../../src/validation');

// Agrupa um bloco de testes relacionados para 
// Manter a organização
describe('Validação de tarefas', () => {

    test('Remove espaços do início e do fim do título', () => {
        expect(normalizeTitle(' Teste Unitário ')).toBe('Teste Unitário');
    });

    test('Retorna string vazia se o título não for um número', () => {
        expect(normalizeTitle(15487)).toBe('');
    });

    // Caso de teste 1: entrada nula
    // Caso de teste 2: entrada indefinido
    test('Retorna string vazia se o título for nulo', () => {
        expect(normalizeTitle(null)).toBe('');
    });
    
    test ('Retorna string vazia se o título for indefinido', () => {
        expect(normalizeTitle(undefined)).toBe('');
    });

    // Casos de teste para a função validateTaskInput


    // Testa se a função remove os espaços em branco do início e do final
    // da descrição quando ela é uma string. Se a entrada não for uma
    // string, como um número, deve retornar uma string vazia.
    test('Se a descrição for uma string, remove os espaços em branco senão, retorna uma string vazia', () => {
        expect(normalizeTitle('  Lavar a louça   ')).toBe('Lavar a louça');
        expect(normalizeTitle(1234)).toBe('')
    });


    // Testa se, ao receber um título vazio, a função retorna uma mensagem
    // informando que o título da tarefa é obrigatório.
    test('Se o título estiver vazio, mostrar que é pra preencher o campo, pois ele é obrigatório', () => {
        expect(normalizeTitle('')).toBe('O título da tarefa é obrigatório');
    });


    // Testa se a função identifica títulos com mais de 120 caracteres
    // e verifica se retorna o título completo, mesmo ultrapassando o limite.
     test('Se o título tiver mais de 120 caracteres, gera um erro', () => {
    const titulo = 'A'.repeat(121);
    expect(normalizeTitle(titulo)).toBe('A'.repeat(121));
    });
    
});