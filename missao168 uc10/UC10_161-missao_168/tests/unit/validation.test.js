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
    
    test('Retorna string vazia se o título for indefinido', () => {
        expect(normalizeTitle(undefined)).toBe('');
    });
});