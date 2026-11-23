// testes

const { calcularMediaFinal } = require('./src/operacoes.js');

         
const {calcularAcrescimo,classificarDesempenho,validarJogador,calcularEntrega,converterRealParaDolar,calcularPedido, validarTamanhoSenha,verificarDisponibilidade,calcularMediaFinal} = require('./src/operacoes.js');



              // DESAFIO 1 // 
test('verificar se aceita valor  0', () => {
    expect(() => calcularAcrescimo(0, 20)).toThrow("Dados inválidos");
});

test('verificar se aceita valor maior que 100' ,() => {
     expect(() => calcularAcrescimo(10, 102)).toThrow("Dados inválidos")
});

test('verificar se rejeita valor negativo', () => {
    expect(() => calcularAcrescimo(-10, 20)).toThrow("Dados inválidos");
});

test('verificar se aceitar valor do percentual negativo',() => {
    expect(() => calcularAcrescimo(10,-20)).toThrow("Dados inválidos");
});
//----------------------------------------------------------------------------------//
        
            // DESAFIO 2//
describe("Testes da função classificarDesempenho", () => {

    test("Deve retornar Excelente para nota 9.5", () => {
        expect(classificarDesempenho(9.5)).toBe("Excelente");
    });

    test("Deve retornar Excelente para nota 9", () => {
        expect(classificarDesempenho(9)).toBe("Excelente");
    });

    test("Deve retornar Bom para nota 7.5", () => {
        expect(classificarDesempenho(7.5)).toBe("Bom");
    });

    test("Deve retornar Regular para nota 5.5", () => {
        expect(classificarDesempenho(5.5)).toBe("Regular");
    });

    test("Deve retornar Insuficiente para nota 3", () => {
        expect(classificarDesempenho(3)).toBe("Insuficiente");
    });

    test("Deve retornar Excelente para nota 10", () => {
        expect(classificarDesempenho(10)).toBe("Excelente");
    });

    test("Deve lançar erro para nota negativa", () => {
        expect(() => classificarDesempenho(-1))
            .toThrow("Nota inválida");
    });

    test("Deve lançar erro para nota maior que 10", () => {
        expect(() => classificarDesempenho(11))
            .toThrow("Nota inválida");
    });

});
// ---------------------------------------------------------------------------------------------------//

        
                 // DESAFIO 3 // 
    describe('Validação dos dados do usuário', () => {

  test('Todos os dados são válidos', () => {
    expect(validarJogador('ana', 19, 5)).toBe(true);
  });

  test('O nome de usuário está vazio', () => {
    expect(validarJogador('', 18, 5)).toBe(false);
  });

  test('O nome de usuário contém apenas espaços', () => {
    expect(validarJogador('   ', 1, 5)).toBe(false);
  });

  test('A idade está abaixo do limite permitido', () => {
    expect(validarJogador('ana', 12, 5)).toBe(false);
  });

  test('A idade está acima do limite permitido', () => {
    expect(validarJogador('ana', 81, 5)).toBe(false);
  });

  test('A pontuação é negativa', () => {
    expect(validarJogador('ana', 19, -6)).toBe(false);
  });

  test('A pontuação é igual a zero', () => {
    expect(validarJogador('ana', 18, 0)).toBe(true);
  });

  test('A idade está exatamente no limite mínimo permitido', () => {
    expect(validarJogador('ana', 18, 5)).toBe(true);
  });

  test('A idade está exatamente no limite máximo permitido', () => {
    expect(validarJogador('ana', 65, 10)).toBe(true);
  });

});
// --------------------------------------------------------------------------------------------//

    
                    // DESAFIO 4 //
describe('Testes da função calcularEntrega', () => {

    test('Caso 1: Compra de 350 e distância de 10 deve retornar 0', () => {
        expect(calcularEntrega(350, 10)).toBe(0);
    });

    test('Caso 2: Compra de 100 e distância de 3 deve retornar 10', () => {
        expect(calcularEntrega(100, 3)).toBe(10);
    });

    test('Caso 3: Compra de 100 e distância de 8 deve retornar 16', () => {
        expect(calcularEntrega(100, 8)).toBe(16);
    });

    test('Caso 4: Compra de 300 e distância de 5 deve retornar 0', () => {
        expect(calcularEntrega(300, 5)).toBe(0);
    });

    test('Caso 5: Compra de 0 e distância de 5 deve retornar 10', () => {
        expect(calcularEntrega(0, 5)).toBe(10);
    });

    test('Caso 6: Compra negativa deve lançar uma exceção', () => {
        expect(() => calcularEntrega(-50, 10)).toThrow('Valores inválidos');
    });

    test('Caso 7: Distância negativa deve lançar uma exceção', () => {
        expect(() => calcularEntrega(100, -2)).toThrow('Valores inválidos');
    });

});

// ----------------------------------------------------------------------------------------//

      

         // DESAFIO 5 //
describe('testes para calcular real para dolar', () => {

    test('valor real 100 e cotação 5, deve retornar 20', () => {
        expect(converterRealParaDolar(100, 5)).toBe(20);
    });

    test('valor real 250 e cotação 5, deve retornar 50', () => {
        expect(converterRealParaDolar(250, 5)).toBe(50);
    });

    test('valor real 0 e cotação 5, deve retornar 0', () => {
        expect(converterRealParaDolar(0, 5)).toBe(0);
    });

    test('valor real 100 e cotação 4, deve retornar 25', () => {
        expect(converterRealParaDolar(100, 4)).toBe(25);
    });

    test('valor real "100" e cotação 4, deve retornar uma mensagem de erro', () => {
        expect(() => converterRealParaDolar("100", 4))
            .toThrow("Os valores devem ser numéricos");
    });

    test('valor real 100 e cotação "5", deve retornar erro', () => {
        expect(() => converterRealParaDolar(100, "5"))
            .toThrow("Os valores devem ser numéricos");
    });

    test('valor real -50 e cotação 5, deve retornar erro', () => {
        expect(() => converterRealParaDolar(-50, 5))
            .toThrow("Valores inválidos");
    });

    test('valor real 100 e cotação 0, deve retornar erro', () => {
        expect(() => converterRealParaDolar(100, 0))
            .toThrow("Valores inválidos");
    });

});

// ------------------------------------------------------------------------------------------------------//

                      // DESAFIO 6//
     test("deve calcular o valor total corretamente", () => {
    expect(calcularPedido(4, 20)).toBe(80);
});

        test("deve retornar zero quando o preço for zero", () => {
    expect(calcularPedido(3, 0)).toBe(0);
});

test("deve lançar erro quando a quantidade for zero", () => {
    expect(() => calcularPedido(0, 10))
        .toThrow("Dados inválidos");
});
        
test("deve calcular o pedido com preço negativo", () => {
    expect(calcularPedido(2, -5)).toBe(-10);
});


//--------------------------------------------------------------------------------------------------------------------//


      // DESAFIO  7 // 

 test("deve aceitar senha com 6 caracteres", () => {
    expect(validarTamanhoSenha("abc123")).toBe(true);
});

test("deve rejeitar senha com 5 caracteres", () => {
    expect(validarTamanhoSenha("abc12")).toBe(false);
});

test("deve rejeitar senha com 12 caracteres", () => {
    expect(validarTamanhoSenha("abc123456789")).toBe(false);
});

test("deve aceitar senha com 10 caracteres", () => {
    expect(validarTamanhoSenha("abc1234567")).toBe(true);
});

test("deve rejeitar senha com 13 caracteres", () => {
    expect(validarTamanhoSenha("abc1234567890")).toBe(false);
});

// testes criados F e G //
 
test("deve aceitar senha com 7 caracteres", () => {
    expect(validarTamanhoSenha("acb1234")).toBe(true);
});

test("deve rejeitar senha com 14 caracteres", () => {
    expect(validarTamanhoSenha("acb12345698715")).toBe(false);
});



       // DESAFIO 8 //

test("deve autorizar retirada quando há estoque suficiente", () => {
    expect(verificarDisponibilidade(20, 5))
        .toBe("Retirada autorizada");
});

test("deve informar estoque insuficiente", () => {
    expect(verificarDisponibilidade(5, 10))
        .toBe("Estoque insuficiente");
});

test("deve autorizar retirada de toda a quantidade disponível", () => {
    expect(verificarDisponibilidade(10, 10))
        .toBe("Retirada autorizada");
});

test("deve informar estoque insuficiente para quantidade zero", () => {
    expect(verificarDisponibilidade(10, 0))
        .toBe("Estoque insuficiente");
});

test("deve lançar erro para estoque negativo", () => {
    expect(() => verificarDisponibilidade(-5, 2))
        .toThrow("Estoque inválido");
});

test("deve lançar erro para quantidade negativa", () => {
    expect(() => verificarDisponibilidade(10, -3))
        .toThrow("Quantidade inválida");
});


                            // DESAFIO 9 //
 test("deve calcular a média corretamente", () => {
    expect(calcularMediaFinal(6, 8)).toBe(7);
})

test("deve retornar média máxima", () => {
    expect(calcularMediaFinal(10, 10)).toBe(10);
});

test("deve calcular média com nota zero", () => {
    expect(calcularMediaFinal(0, 8)).toBe(4);
});

test("deve rejeitar nota negativa", () => {
    expect(() => calcularMediaFinal(-2, 8))
        .toThrow("Notas inválidas");
});

test("deve rejeitar nota superior a 10", () => {
    expect(() => calcularMediaFinal(8, 12))
        .toThrow("Notas inválidas");
});


// testes que a questao perdiu//

test("deve calcular média decimal", () => {
    expect(calcularMediaFinal(7.5, 8.5)).toBe(8);
});

test("deve rejeitar nota acima de 10", () => {
    expect(() => calcularMediaFinal(11, 8))
        .toThrow("Notas inválidas");
});

test("deve rejeitar segunda nota negativa", () => {
    expect(() => calcularMediaFinal(8, -3))
        .toThrow("Notas inválidas");
});
