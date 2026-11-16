const {
    calcularDesconto,
    validarCadastro
} = require("../src/operacoes.js");

// QUESTÃO 1 - CALCULAR DESCONTO

describe("Testes da função calcularDesconto", () => {

    // CENÁRIO 1 - Calcular desconto corretamente
    test("Deve calcular o desconto corretamente", () => {
        const resultado = calcularDesconto(100, 10);

        expect(resultado).toBe(90);
    });

    // CENÁRIO 2 - Rejeitar valor igual a zero
    test("Deve rejeitar valor igual a zero", () => {
        expect(() => calcularDesconto(0, 10))
            .toThrow("Dados inválidos");
    });

    // CENÁRIO 3 - Rejeitar percentual acima de 100
    test("Deve rejeitar percentual acima de 100", () => {
        expect(() => calcularDesconto(100, 150))
            .toThrow("Dados inválidos");
    });

});


// QUESTÃO 3 - VALIDAR CADASTRO

 
describe("Testes da função validarCadastro", () => {

    // CENÁRIO 1 - Todos os dados válidos
    test("Deve aceitar cadastro com todos os dados válidos", () => {
        expect(validarCadastro("Maria", 25, "maria@email.com"))
            .toBe(true);
    });

    // CENÁRIO 2 - Todos os dados inválidos
    test("Deve rejeitar cadastro com todos os dados inválidos", () => {
        expect(validarCadastro("", 15, "mariaemail.com"))
            .toBe(false);
    });

    // CENÁRIO 3 - Nome vazio
    test("Deve rejeitar nome vazio", () => {
        expect(validarCadastro("", 25, "maria@email.com"))
            .toBe(false);
    });

    // CENÁRIO 4 - Nome contendo apenas espaços
    test("Deve rejeitar nome contendo apenas espaços", () => {
        expect(validarCadastro("   ", 25, "maria@email.com"))
            .toBe(false);
    });

    // CENÁRIO 5 - Idade vazia
    test("Deve rejeitar idade vazia", () => {
        expect(validarCadastro("Maria", "", "maria@email.com"))
            .toBe(false);
    });

    // CENÁRIO 6 - Idade abaixo de 18 anos
    test("Deve rejeitar idade abaixo de 18 anos", () => {
        expect(validarCadastro("Maria", 17, "maria@email.com"))
            .toBe(false);
    });

    // CENÁRIO 7 - Idade acima de 100 anos
    test("Deve rejeitar idade acima de 100 anos", () => {
        expect(validarCadastro("Maria", 101, "maria@email.com"))
            .toBe(false);
    });

    // CENÁRIO 8 - E-mail vazio
    test("Deve rejeitar e-mail vazio", () => {
        expect(validarCadastro("Maria", 25, ""))
            .toBe(false);
    });

    // CENÁRIO 9 - E-mail sem @
    test("Deve rejeitar e-mail sem @", () => {
        expect(validarCadastro("Maria", 25, "mariaemail.com"))
            .toBe(false);
    });

});


// questao 4 : 

// Caso 1 - Compra acima de R$ 200
    test("Deve retornar frete grátis para compra de 250 reais", () => {
        expect(calcularFrete(250, 10)).toBe(0);
    });

    // Caso 2 - Compra abaixo de R$ 200
    test("Deve calcular o frete corretamente", () => {
        expect(calcularFrete(100, 10)).toBe(20);
    });

    // Caso 3 - Compra exatamente R$ 200
    test("Deve retornar frete grátis para compra de 200 reais", () => {
        expect(calcularFrete(200, 5)).toBe(0);
    });

    // Caso 4 - Compra com valor zero
    test("Deve calcular o frete quando a compra for zero", () => {
        expect(calcularFrete(0, 10)).toBe(20);
    });

    // Caso 5 - Valor da compra negativo
    test("Deve lançar erro quando o valor da compra for negativo", () => {
        expect(() => calcularFrete(-50, 10))
            .toThrow("Valores inválidos");
    });

    // Caso 6 - Distância negativa
    test("Deve lançar erro quando a distância for negativa", () => {
        expect(() => calcularFrete(100, -5))
            .toThrow("Valores inválidos");
    });

// questao 5 

describe("testes na função converterCelsiusParaFahrenheit", () => {

    test("Caso 1: deve converter 0°C para 32°F", () => {
        expect(converterCelsiusParaFahrenheit(0)).toBe(32);
    });

    test("Caso 2: deve converter 100°C para 212°F", () => {
        expect(converterCelsiusParaFahrenheit(100)).toBe(212);
    });

    test("Caso 3: deve converter -40°C pa ra -40°F", () => {
        expect(converterCelsiusParaFahrenheit(-40)).toBe(-40);
    });

    test("Caso 4: deve converter 25°C para 77°F", () => {
        expect(converterCelsiusParaFahrenheit(25)).toBe(77);
    });

    test("Caso 5: deve lançar erro ao receber uma string numérica", () => {
        expect(() => converterCelsiusParaFahrenheit("25"))
            .toThrow("A temperatura deve ser numérica");
    });

    test("Caso 6: deve lançar erro ao receber uma string não numérica", () => {
        expect(() => converterCelsiusParaFahrenheit("abc"))
            .toThrow("A temperatura deve ser numérica");
    });

});

// questo 9 : 

describe("Testes da função calcularMedia", () => {

    test("Teste 1: deve calcular a média corretamente", () => {
        expect(calcularMedia(8, 6)).toBe(7);
    });

    test("Teste 2: deve retornar 10 quando as duas notas forem 10", () => {
        expect(calcularMedia(10, 10)).toBe(10);
    });

    test("Teste 3: deve aceitar nota zero", () => {
        expect(calcularMedia(0, 8)).toBe(4);
    });

    test("Teste 4: deve lançar erro para nota negativa", () => {
        expect(() => calcularMedia(-1, 8)).toThrow("Notas inválidas");
    });

    test("Teste 5: deve lançar erro para nota acima de 10", () => {
        expect(() => calcularMedia(5, 15)).toThrow("Notas inválidas");
    });

    test("Teste 6: deve lançar erro quando as duas notas forem inválidas", () => {
        expect(() => calcularMedia(-2, 15)).toThrow("Notas inválidas");
    });

    test("Teste 7: deve calcular a média de duas notas iguais", () => {
        expect(calcularMedia(7, 7)).toBe(7);
    });

    test("Teste 8: deve calcular a média com notas decimais", () => {
        expect(calcularMedia(7.5, 8.5)).toBe(8);
    });

});