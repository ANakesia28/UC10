# nome : Ana kesia de oliveira da costa  

# questão 1 :
## A: 
a função calcularDesconto ela tem as variavel: valor e percentual.a função verificar se a variavel "valor" e menor ou igual a 0,e verificar se o "percentual" e menor ou maior que 100,se os resultados for menor ou igual a 100 o if retorna uma mensagem para a tela  dizendo " dados invalidos ",se os valores for diferentes de zero ou 100 a const com o nome "desconto",ela pega o dado que foi digitado na variavel " valor " e multiplicar pelo valor do " percentual ",logo apos ela pegar esse resultado e dividir por 100. apos essa conta ela retorna o valor do desconto da tela.

## b: 
## Cenário 1 – Testar o campo valor para verificar se recebe apenas números.

Entrada: valor = "abc" e percentual = 10.

Saída esperada: Erro "Dados inválidos".

 ## Cenário 2  – Testar o campo percentual para verificar se recebe apenas números.

Entrada: valor = 100 e percentual = "abc".

Saída esperada: Erro "Dados inválidos".

 ## Cenário 3  – Testar se o desconto é calculado corretamente.

Entrada: valor = 100 e percentual = 10.

Saída esperada: 90.  

## 


# questão 2 :
## A :
A função verificarAprovacao ela tem a variavel nota, a função receber o valor de nota digitado no campo e funcionar da seguinte forma: se a nota for menor que 0 ou maior que 10,ele vai para um erro e vai aparecer uma mensagem de erro , se a nota nao for nehuma dessas duas ,vai para um if e se a  nota for maior de 7 ou igual a 7,vai aparecer uma mensagem escrito " aluno aporvado ", se a nota nao for assim vai aparecer a mensagem " aluno reprovado"                                                                                                                            
## B:
## Cenário 1 – Aluno aprovado

Valor de entrada: 8

Resultado esperado: "Aprovado"

Explicação: como a nota é maior que 7, o aluno deve ser aprovado.

## Cenário 2 – Aluno reprovado

Valor de entrada: 5

Resultado esperado: "Reprovado"

Explicação: como a nota é menor que 7, o aluno deve ser reprovado.

## Cenário 3 – Nota igual ao limite de aprovação

Valor de entrada: 7

Resultado esperado: "Aprovado"

Explicação: a função considera notas maiores ou iguais a 7 como aprovadas.

## Cenário 4 – Nota inválida

Valor de entrada: 11

Resultado esperado: apresentar o erro "Nota inválida".

Explicação: a função não permite notas maiores que 10.

## C : 

## D : 
Porque é necessário testar diferentes notas para garantir que a função aprove, reprove e identifique notas inválidas corretamente. Testar apenas uma aprovação não garante que todas as condições estejam funcionando.


# questão 3:
## A : 
Nome: não pode estar vazio nem conter apenas espaços.
Idade: deve ser igual ou superior a 18 anos e igual ou inferior a 100 anos.
E-mail: não pode estar vazio e deve conter o caractere @.

## B: 
Quando apenas um dos três dados estiver inválido, a função deverá retornar false, mesmo que os outros dois dados estejam corretos,
Isso acontece porque todos os campos precisam atender às condições de validação para que o cadastro seja considerado válido,
Por exemplo, se o nome e o e-mail estiverem corretos, mas a idade for menor que 18 anos, o cadastro será rejeitado.

## C : 


# questao 4 : 
## B: 
O caso 3 deve retornar zero porque a função determin
a que compras com valor igual ou superior a R$ 200,00 têm frete grátis. Como a compra foi exatamente R$ 200,00, o cliente não precisa pagar pelo frete. 

# C:

# questao 5 :
 
## A : 
A entrada "25" deve provocar um erro porque, em JavaScript, existe uma diferença entre os tipos de dados number e string,
25 é um valor numérico (number).
"25" é um texto (string), mesmo que represente um número.

## questao 6:
 ## A: testes unitarios sao feitos para testar cada "pedacinho" do codigo e evitar problemas em funçoes,desse jeito o resultado do codigo sair conforme o esperado.

 ## B: 
 teste 1 : PASSA
 teste 2 : PASSA 
 teste 3 : PASSA
 teste 4 : FALHA 

 ## C: 
 O Teste D espera que a função retorne -10 ao receber quantidade = 2 e precoUnitario = -5,Porém, a função possui a seguinte condição

 ## questao 7:
 
 ## A :
Teste A – PASSA
A senha "abc12345" possui exatamente 8 caracteres. Como a função aceita senhas com 8 ou mais caracteres, retorna true, conforme esperado pelo teste.

## Teste B – PASSA
A senha "abc123" possui apenas 6 caracteres. Como a função verifica se a senha possui menos de 8 caracteres, retorna false, conforme esperado pelo teste.

## Teste C – NÃO PASSA
A senha "abc1234567" possui 10 caracteres. Como a função aceita qualquer senha com 8 ou mais caracteres, retorna true. Porém, o teste espera false.


## Teste D – PASSA
A senha "abc123456789" possui 12 caracteres. Como possui mais de 8 caracteres, a função retorna true, conforme esperado pelo teste.

 ## B: 
 e para o codigo rejeitar se a senha tiver mais de 10 caracteres,entao e para  ir "true" pois vai rejeitar ,mas foi false.

## C: 
nao vereficar ,apenas verificar a quantidade de caracteres.

 ## questao 8 : 

## A : 
## Teste A – Passa

A função recebe estoque = 20 e quantidadeSolicitada = 5.
Como a quantidade solicitada é maior que zero e menor que o estoque disponível, o pedido é aprovado.
Resultado esperado: "Pedido aprovado".

## Teste B – Passa

A função recebe estoque = 5 e quantidadeSolicitada = 10.
Como a quantidade solicitada é maior que o estoque disponível, a função retorna "Estoque insuficiente".
Resultado esperado: "Estoque insuficiente".

## Teste C – Passa

A função recebe estoque = 10 e quantidadeSolicitada = 10.
Como a quantidade solicitada é igual ao estoque disponível, não existe falta de produtos. A condição quantidadeSolicitada > estoque é falsa, então o pedido é aprovado.
Resultado esperado: "Pedido aprovado".

## Teste D – Falha

A função recebe estoque = 10 e quantidadeSolicitada = 0.
A condição quantidadeSolicitada <= 0 é verdadeira. Por isso, a função lança o erro "Quantidade inválida" em vez de retornar "Estoque insuficiente", como o teste espera.
Portanto, teste está incorreta.

## Teste E – Passa

 ## A 
 função recebe estoque = 10 e quantidadeSolicitada = -2.
Como a quantidade solicitada é negativa, a condição quantidadeSolicitada <= 0 é verdadeira. Assim, a função lança corretamente o erro "Quantidade inválida", conforme esperado pelo teste.

## B : 
porque so pode da estoque insuficiente se o numero de quantidades for maior que o numero do estoque,como esta igual ,nao da erro 

## C:
O problema presente no Teste D é que a expectativa do teste não corresponde ao comportamento implementado na função verificarEstoque().
O teste espera que, ao solicitar quantidade zero, a função retorne "Estoque insuficiente".


## questao 9 : 

## A : 
## Teste 1 – 
PASSA: as notas 8 e 6 são válidas, pois estão entre 0 e 10. A média é 7, correspondendo ao resultado esperado.

## Teste 2 – PASSA: 
as duas notas são 10, que é o valor máximo permitido. A média é 10, conforme esperado.

## Teste 3 – PASSA:
 as notas 0 e 8 são válidas. A média é 4, correspondendo ao resultado esperado.

## Teste 4 – FALHA:
 a primeira nota é -1, ou seja, é negativa. Por isso, a função lança o erro "Notas inválidas" em vez de retornar 3,5, como o teste espera.

## Teste 5 – FALHA: 
a segunda nota é 15, ultrapassando o limite máximo permitido de 10. Por isso, a função lança o erro "Notas inválidas" em vez de retornar 10.