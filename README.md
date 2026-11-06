# RELATÓRIO DE TESTES DE SOFTWARE

## 1\. Identificação do projeto

| Informação | Descrição |
| --- | --- |
| **Nome do projeto:** | Academiaviva |
| **Resumo do projeto:** | A Academia Viva é um site de cursos online e presenciais que ajuda as pessoas a adquirir conhecimentos e desenvolver habilidades para o mercado de trabalho. |
| **Nome do testador:** | Ana kesia de oliveira da costa  |
| **Data dos testes:** | 04/11/2026 |
| **Tecnologias utilizadas:** | HTML, CSS, JavaScript, Node.js, Express,SQLite, Jest, Supertest |

---

## 2\. Objetivo dos testes

Descreva qual foi o objetivo da realização dos testes na aplicação.

a - Qual funcionalidade foi testada? 
b - O que os testes pretendiam verificar?
c - Quais possíveis erros ou falhas deveriam ser identificados?

**Resposta:**

a - Foi testada a validação do formulário de cadastro de interessados nos cursos, verificando os campos de nome, e-mail, telefone e modalidade de interesse.

b - Verificar se o sistema aceitava cadastros válidos e identificava corretamente informações preenchidas de forma incorreta.

c - Nomes muito curtos, preenchidos apenas com espaços ou com números, e-mails sem o símbolo @ ou incompletos, e-mails preenchidos com números, telefone com tipo incorreto e modalidades de interesse inválidas ou escritas com letras maiúsculas e minúsculas diferentes.

---

## 3\. Ambiente de testes

Informe as ferramentas e tecnologias utilizadas para executar os testes.

| Ferramenta/Tecnologia | Versão |
| --- | --- |
| JavaScript | 22.2.0 |
| Node.js | 22.2.0 |
| Jest | 30.5.2 |
| NPM | 10.7.0 |
| Express | 4.22.3 |
| Supertest | 7.3.1 |
| SQLite | 6.0.1 |

**Comando utilizado preparar o ambiente:**

``` bash
npm install
```

**Comando utilizado executar o sistema (servidor):**

``` bash
npm start
```

**Comando utilizado para executar os testes:**

``` bash
npm test
```

---

## 4\. Funcionalidades testadas

Liste as funções, métodos ou componentes da aplicação que foram submetidos aos testes.

| Nº | Funcionalidade/Função | Arquivo | Objetivo do teste |
| --- | --- | --- | --- |
| 1 | `validateLead()` | `src/validation.js` | Verificar se o cadastro completo é validado corretamente. |


---

## 5\. Registro detalhado dos testes realizados

Foram implementados 11 testes unitários utilizando Jest, todos relacionados à função `validateLead()`.


### Teste 01 – \[Nome ou descrição do teste\]

- **Funcionalidade testada:** `validateLead()`.
- **Nome do teste no Jest:** `Aceita cadastro completo válido`.
- **Objetivo:** Verificar se um cadastro com todos os campos preenchidos corretamente é aceito.
- **Tipo de cenário:** Positivo.
- **Entrada utilizada:** Nome: Ana ; e-mail: ana@email.com; telefone: 27999999999; modalidade: Online.
- **Resultado esperado:** Cadastro válido, sem mensagens de erro.
- **Resultado obtido:** Cadastro válido, sem erros.
- **Status:** Aprovado.

**Código do teste:**

``` javascript
("Aceita cadastro completo válido", () => {
    const result = validateLead({
        name: "ana"   
        email: "ana@email.com",
        phone: "27858858585",
        interest: "Online"
    });

    expect(result.valid).toBe(true);
    expect(result.errors.length).toBe(0);
});
```

**Justificativa:**

Verifica se o sistema aceita corretamente um cadastro completo quando todas as informações estão dentro dos padrões esperados

---

### Teste 02 – \[Nome ou descrição do teste\]

- **Funcionalidade testada:** `validateLead()`.
- **Nome do teste no Jest:** `Aceita cadastro mínimo válido`.
- **Objetivo:** Verificar se o cadastro é aceito mesmo sem o preenchimento dos campos opcionais.
- **Tipo de cenário:** Positivo.
- **Entrada utilizada:** Nome: Ana; e-mail: ana@email.com.
- **Resultado esperado:** Cadastro válido.
- **Resultado obtido:** Cadastro válido.
- **Status:** Aprovado.

**Código do teste:**

``` javascript
("Aceita cadastro mínimo válido", () => {
    const result = validateLead({
        name: "Ana",
        email: "ana@email.com"
    });

    expect(result.valid).toBe(true);
});
```

**Justificativa:**

Permite verificar se os campos opcionais não impedem a realização de um cadastro válido.

---

### Teste 03 – Rejeita nome muito curto

- **Funcionalidade testada:** Validação de nome.
- **Nome do teste no Jest:** `Rejeita nome muito curto`.
- **Objetivo:** Verificar se o sistema rejeita nomes com menos de três caracteres.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Jo; e-mail: ana@email.com.
- **Resultado esperado:** Exibição da mensagem de erro sobre o tamanho mínimo do nome.
- **Resultado obtido:** Mensagem de erro esperada.
- **Status:** Aprovado.

**Código do teste:**

```javascript
test("Rejeita nome muito curto", () => {
    const result = validateLead({
        name: "Jo",
        email: "ana@email.com"
    });

    expect(result.errors).toContain(
        "Informe seu nome (mínimo de 3 caracteres)."
    );
});
```

**Justificativa:**

Verifica se o sistema impede o cadastro de nomes que não atendem ao tamanho mínimo exigido.


---

### Teste 04 – Rejeita nome com espaços vazios

- **Funcionalidade testada:** Validação de nome.
- **Nome do teste no Jest:** `Rejeita nome com espaços vazios`.
- **Objetivo:** Verificar se o sistema identifica nomes preenchidos apenas com espaços.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: `"   "`; e-mail: ana@email.com.
- **Resultado esperado:** Cadastro inválido.
- **Resultado obtido:** Cadastro inválido.
- **Status:** Aprovado.

**Código do teste:**

```javascript
test("Rejeita nome com espaços vazios", () => {
    const result = validateLead({
        name: "   ",
        email: "ana@email.com"
    });

    expect(result.valid).toBe(false);
});
```

**Justificativa:**

Garante que o usuário não consiga realizar um cadastro utilizando apenas espaços no campo de nome.

---

### Teste 05 – Rejeita nome com tipo incorreto

- **Funcionalidade testada:** Validação de nome.
- **Nome do teste no Jest:** `Rejeita nome com tipo incorreto`.
- **Objetivo:** Verificar se o sistema rejeita nomes que não são textos.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: 123; e-mail: ana@email.com.
- **Resultado esperado:** Cadastro inválido.
- **Resultado obtido:** Cadastro inválido.
- **Status:** Aprovado.

**Código do teste:**

```javascript
test("Rejeita nome com tipo incorreto", () => {
    const result = validateLead({
        name: 123,
        email: "ana@email.com"
    });

    expect(result.valid).toBe(false);
});
```

**Justificativa:**

Verifica se o campo de nome aceita somente informações do tipo texto, evitando dados em formatos inadequados.

---

**Justificativa:**

Verifica se o campo de nome aceita somente informações do tipo texto, evitando dados em formatos inadequados.

---

### Teste 06 – Rejeita e-mail sem @

- **Funcionalidade testada:** Validação de e-mail.
- **Nome do teste no Jest:** `Rejeita e-mail sem @`.
- **Objetivo:** Verificar se o sistema identifica e-mails sem o símbolo obrigatório `@`.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: anaemail.com.
- **Resultado esperado:** Mensagem de e-mail inválido.
- **Resultado obtido:** Mensagem de erro esperada.
- **Status:** Aprovado.

**Código do teste:**

```javascript
test("Rejeita e-mail sem @", () => {
    const result = validateLead({
        name: "Ana",
        email: "anaemail.com"
    });

    expect(result.errors).toContain(
        "Informe um e-mail válido."
    );
});
```

**Justificativa:**

Garante que o sistema identifique endereços de e-mail que não apresentam a estrutura básica necessária.

---

### Teste 07 – Rejeita e-mail incompleto

- **Funcionalidade testada:** Validação de e-mail.
- **Nome do teste no Jest:** `Rejeita e-mail incompleto`.
- **Objetivo:** Verificar se o sistema rejeita e-mails sem um domínio completo.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: email@email.
- **Resultado esperado:** Cadastro inválido.
- **Resultado obtido:** Cadastro inválido.
- **Status:** Aprovado.

**Código do teste:**

```javascript
test("Rejeita e-mail incompleto", () => {
    const result = validateLead({
        name: "Ana",
        email: "email@email"
    });

    expect(result.valid).toBe(false);
});
```

**Justificativa:**

Verifica se o sistema impede o uso de endereços de e-mail incompletos ou fora do formato esperado.

---

### Teste 08 – Rejeita e-mail com tipo incorreto

- **Funcionalidade testada:** Validação de e-mail.
- **Nome do teste no Jest:** `Rejeita e-mail com tipo incorreto`.
- **Objetivo:** Verificar se o sistema rejeita e-mails que não são informados como texto.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: 12345.
- **Resultado esperado:** Cadastro inválido.
- **Resultado obtido:** Cadastro inválido.
- **Status:** Aprovado.

**Código do teste:**

```javascript
test("Rejeita e-mail com tipo incorreto", () => {
    const result = validateLead({
        name: "Ana",
        email: 12345
    });

    expect(result.valid).toBe(false);
});
```

**Justificativa:**

Garante que o campo de e-mail não aceite valores numéricos ou outros tipos de dados inadequados.

---

### Teste 09 – Rejeita telefone com tipo numérico

- **Funcionalidade testada:** Validação de telefone.
- **Nome do teste no Jest:** `Rejeita telefone com tipo numérico`.
- **Objetivo:** Verificar se o sistema rejeita telefones informados como números em vez de textos.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: ana@email.com; telefone: 27999999999 (numérico).
- **Resultado esperado:** Mensagem informando que o telefone deve ser um texto.
- **Resultado obtido:** Mensagem de erro esperada.
- **Status:** Aprovado.

**Código do teste:**

```javascript
test("Rejeita telefone com tipo numérico", () => {
    const result = validateLead({
        name: "Ana",
        email: "ana@email.com",
        phone: 27858858585
    });

    expect(result.errors).toContain(
        "O telefone deve ser um texto."
    );
});
```

**Justificativa:**

Verifica se o sistema identifica o tipo incorreto de dado no telefone, garantindo que ele seja informado como texto.

---

### Teste 10 – Rejeita modalidade inválida

- **Funcionalidade testada:** Validação de modalidade.
- **Nome do teste no Jest:** `Rejeita modalidade inválida`.
- **Objetivo:** Verificar se o sistema rejeita modalidades que não estão disponíveis.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: ana@email.com; modalidade: Híbrido.
- **Resultado esperado:** Mensagem de modalidade inválida.
- **Resultado obtido:** Mensagem de erro esperada.
- **Status:** Aprovado.

**Código do teste:**

```javascript
test("Rejeita modalidade inválida", () => {
    const result = validateLead({
        name: "Ana",
        email: "ana@email.com",
        interest: "Híbrido"
    });

    expect(result.errors).toContain(
        "Selecione uma modalidade válida."
    );
});
```

**Justificativa:**

Garante que o usuário selecione somente uma das modalidades disponibilizadas pela aplicação.

---

### Teste 11 – Rejeita modalidade com diferença de caixa

- **Funcionalidade testada:** Validação de modalidade.
- **Nome do teste no Jest:** `Rejeita modalidade com diferença de caixa`.
- **Objetivo:** Verificar se o sistema diferencia letras maiúsculas e minúsculas nas modalidades.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:** Nome: Ana; e-mail: ana@email.com; modalidade: online.
- **Resultado esperado:** Cadastro inválido.
- **Resultado obtido:** Cadastro inválido.
- **Status:** Aprovado.

**Código do teste:**

```javascript
test("Rejeita modalidade com diferença de caixa", () => {
    const result = validateLead({
        name: "Ana",
        email: "ana@email.com",
        interest: "online"
    });

    expect(result.valid).toBe(false);
});
```

**Justificativa:**

Verifica se o sistema reconhece apenas as modalidades cadastradas com a escrita exata, evitando diferenças no preenchimento das opções.

---

**Importante:** Todos os 11 testes implementados foram aprovados na execução final. Não foram registrados apenas os testes aprovados por escolha: os 11 cenários implementados foram documentados individualmente.

---


## 6. Resumo dos resultados

| Indicador | Quantidade |
|---|---:|
| Total de testes executados | 11 |
| Testes aprovados (Passed) | 11 |
| Testes reprovados (Failed) | 0 |

**Percentual de aprovação:**

Cálculo: (Testes aprovados ÷ Total de testes executados) × 100

(11 ÷ 11) × 100 = **100%**

---

## 7. Evidências da execução dos testes

![Evidência da execução dos testes](../missao167/img/Captura%20de%20tela%202026-11-06%20084248.png)

---


## 8. Problemas identificados e correções realizadas

| Problema identificado | Causa do problema | Solução implementada | Situação |
|---|---|---|---|
| Nenhuma falha identificada na execução final | Não foram encontrados erros nos cenários testados | Não foi necessária nenhuma correção | Não se aplica |

Na execução final dos testes, não foram identificadas falhas nos cenários implementados. Todos os 11 testes apresentaram os resultados esperados, demonstrando que a função de validação está funcionando corretamente nos casos avaliados.

---

## 9. Análise dos resultados

**1. Todos os testes apresentaram os resultados esperados? Justifique.**

Sim. Todos os 11 testes apresentaram os resultados esperados, totalizando 100% de aprovação. Isso demonstra que a função `validateLead()` respondeu corretamente aos diferentes dados enviados durante os testes.

**2. Quais foram os cenários mais importantes verificados durante os testes?**

Os cenários mais importantes foram a aceitação de cadastros válidos e a rejeição de informações incorretas, como nomes muito curtos, e-mails inválidos, telefones numéricos e modalidades não permitidas.

**3. Algum teste identificou uma falha na aplicação? Qual?**

Na execução final, nenhum teste identificou falhas na função avaliada. Todos os resultados corresponderam ao comportamento esperado.

**4. Quais alterações foram necessárias para corrigir os problemas encontrados?**

Não foram necessárias alterações na execução final, pois todos os testes foram aprovados.

**5. Existem funcionalidades que ainda precisam ser testadas? Quais?**

Sim. Ainda podem ser realizados testes na função `normalizeCourseFilter()`, nas rotas da aplicação, na integração com o banco de dados SQLite e no funcionamento geral do formulário de cadastro.

---

## 10. Conclusão

A realização dos testes foi importante para verificar o funcionamento da aplicação Academia Viva e identificar possíveis problemas na validação dos dados do formulário de cadastro.

Durante os testes, foram avaliados diferentes cenários, incluindo situações válidas e inválidas, garantindo que o sistema aceitasse informações corretas e rejeitasse dados preenchidos inadequadamente.

Ao todo, foram realizados 11 testes, todos aprovados, alcançando 100% de aprovação. Os resultados demonstraram que a função `validateLead()` apresentou o comportamento esperado nos cenários avaliados.

Concluí que os testes unitários são fundamentais para garantir a qualidade, a segurança e a confiabilidade de um software, pois permitem verificar cada funcionalidade individualmente e identificar possíveis erros antes que eles afetem os usuários.

---

**Relatório elaborado por:** Ana kesia de oliveira da costa 

**Data da última atualização:** 06/11/2026
---

**Relatório elaborado por:** \[Ana kesia de oliveira da costa\]

**Data da última atualização:** \[06\11\2026\]  