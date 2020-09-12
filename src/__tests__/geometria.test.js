const Geometria = require('../controllers/GeometriaController');

describe('Teste de geometria', () => {
  it('Os parâmetros devem estar na faixa 0::99 (ou será entrada inválida)', () => {
    const vetor = [10, 20, 100];
    expect(Geometria.testeTriangulo(vetor)).toEqual(0);
  });

  it('Triângulo Equilátero, deve retornar 1', () => {
    const vetor = [70, 70, 70];
    expect(Geometria.testeTriangulo(vetor)).toEqual(1);
  });

  it('Triângulo Isóceles, deve retornar 2', () => {
    const vetor = [70, 80, 80];
    expect(Geometria.testeTriangulo(vetor)).toEqual(2);
  });

  it('Triângulo Escaleno, deve retornar 3', () => {
    const vetor = [17, 24, 30];
    expect(Geometria.testeTriangulo(vetor)).toEqual(3);
  });

  it('Nao é triângulo, deve retornar 4', () => {
    const vetor = [25, 25, 50];
    expect(Geometria.testeTriangulo(vetor)).toEqual(4);
  });
})