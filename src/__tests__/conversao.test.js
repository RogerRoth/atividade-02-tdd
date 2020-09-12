const Conversao = require('../controllers/ConversaoController');

describe('Teste de conversão', () => {

  it('Retorna uma cadeia de inteiros contendo os números contidos no formato CSV', () => {
    const valor = '22222, 11111, 33333, 44444, 66666';
    
    expect(Conversao.conversao(valor)).toEqual([22222, 11111, 33333, 44444, 66666]);
  });

  it('Se o formato não possui números deverá retornar um array vazio, retorna []', () => {
    const valor = 'aaa, 11111, 33333, 44444, 66666';
    expect(Conversao.conversao(valor)).toEqual(expect.arrayContaining([]));
  });

})