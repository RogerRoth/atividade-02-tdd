# Atividade 02 de Testes de Software


## Criar e executar casos de testes os seguintes problemas:
--------------------------------
1. **Ordenação**  
Uma equipe implementou e disponibilizou como biblioteca estática uma função que ordena em ordem crescente um
vetor de inteiros. Porém, esta função deve respeitar certas características:
    - O vetor deve possuir entre 4 e 10 entradas (inclusive)
    - Cada número deve possuir 5 dígitos
    - A função retorna 0 caso a entrada não respeite as condições de entrada e 1 caso contrário
    - Só são aceitos números inteiros.  
 
2. **Conversão**  
A mesma equipe também disponibilizou como biblioteca uma função que converte valores separados por vírgula
(CSV) em um vetor:
    - Esta função retorna uma cadeia de inteiros contendo os números contidos no formato CSV. Caso esse formato não
possua números deverá retornado uma cadeia de inteiros vazia.
    - Similarmente à questão anterior, você deverá criar e executar casos de testes.
    
3. **Qual é o tipo do triângulo**  
Uma terceira função que deve ser testada lê três lados de um triângulo e imprime que tipo de triângulo é este.
Alguns pontos frisados sobre esta questão:
    - A saída da função é um inteiro representando os seguintes valores:
        - 1 - Equilátero
        - 2 - Isósceles
        - 3 - Escaleno
        - 4 - Não é triângulo
        - 0 - Entrada inválida
    - Os parâmetros devem estar na faixa 0::99 (ou será entrada inválida)
    - Mesmo que triângulo equilátero seja isósceles a função deverá retornar 2
