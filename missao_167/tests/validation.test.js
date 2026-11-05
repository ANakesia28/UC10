const { validateLead } = require("../src/validation");

describe("Testes unitários da função validateLead()", () => {

  test("Verifica se o nome é válido", () => {
    const result = validateLead({
      name: "Luiza",
      email: "luiza@email.com"
    });

    expect(result.valid).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  test("Verifica se o cadastro completo é válido", () => {
    const result = validateLead({
      name: "Maria Silva",
      email: "maria@gmail.com",
      phone: "27999999999",
      interest: "Online"
    });

    expect(result.valid).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  test("Verifica se o nome possui menos de 2 caracteres", () => {
    const result = validateLead({
      name: "L",
      email: "luiza@email.com"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain(
      "Informe seu nome (mínimo de 2 caracteres)."
    );
  });

  test("Verifica se o nome contém apenas espaços em branco", () => {
    const result = validateLead({
      name: "     ",
      email: "luiza@email.com"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain(
      "Informe seu nome (mínimo de 3 caracteres)."
    );
  });

  test("Verifica se o nome possui um tipo incorreto", () => {
    const result = validateLead({
      name: 12345,
      email: "luiza@email.com"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain(
      "Informe seu nome (mínimo de 2 caracteres)."
    );
  });

  test("Verifica se o e-mail está sem o símbolo @", () => {
    const result = validateLead({
      name: "Luiza",
      email: "anaemail.com"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Informe um e-mail válido.");
  });

  test("Verifica se o e-mail está incompleto", () => {
    const result = validateLead({
      name: "Luiza",
      email: "email@email"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Informe um e-mail válido.");
  });

  test("Verifica se o e-mail possui um tipo incorreto", () => {
    const result = validateLead({
      name: "Luiza",
      email: 12345
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Informe um e-mail válido.");
  });

  test("Verifica se o telefone possui um tipo incorreto", () => {
    const result = validateLead({
      name: "Luiza",
      email: "luiza@email.com",
      phone: 123456789
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain(
      "Preencha o telefone corretamente."
    );
  });

  test("Verifica se a modalidade de interesse é inválida", () => {
    const result = validateLead({
      name: "Luiza",
      email: "luiza@email.com",
      interest: "Semipresencial"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain(
      "Selecione uma modalidade válida."
    );
  });

  test("Verifica se a modalidade diferencia letras maiúsculas e minúsculas", () => {
    const result = validateLead({
      name: "Luiza",
      email: "luiza@email.com",
      interest: "online"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain(
      "Selecione uma modalidade válida."
    );
  });

});