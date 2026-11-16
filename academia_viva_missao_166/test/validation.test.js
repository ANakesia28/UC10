// importação de modulos
const { validateLead} = require("../src/validation");

describe("aplicação de teste unitarios na função validateLead", () => {
      test("vereficaa se o nome tem 3 caracteres", () => {
        const result = { name: "Jo", email: "jo@example.com" };
        const result = validateLead({"Jo"});
        expect(result).toBe("Nome deve ter pelo menos 3 caracteres");
      });
        


});