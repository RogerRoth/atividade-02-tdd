const Ordenacao = require('../controllers/OrdenacaoControler');

describe('Teste de ordenacao', () => {
  it('O vetor deve possuir entre 4 e 10 entradas (inclusive)', () => {
    const vetor = [22222, 11111, 33333, 44444, 66666];
    expect(Ordenacao.ordenacao(vetor)).toEqual(1);
  });

  it('Cada número deve possuir 5 dígitos, deve retornar 0', () => {
    const vetor = [22222, 11111, 33333, 44444, 6666];
    expect(Ordenacao.ordenacao(vetor)).toEqual(0);
  });

  it('Só são aceitos números inteiros', () => {
    //testando se passa numeros não inteiros
    const vetor = [22222, 11111, 33333, 44444, 666.6];
    expect(Ordenacao.ordenacao(vetor)).toEqual(0);
  });
})