import { describe, it, expect } from 'vitest';

function calcular(n1, n2, operacao) {
  if (operacao === 'divisao' && n2 === 0) {
    return 'Erro: Divisão por zero';
  }
  switch (operacao) {
    case 'soma':
      return n1 + n2;
    case 'subtracao':
      return n1 - n2;
    case 'multiplicacao':
      return n1 * n2;
    case 'divisao':
      return n1 / n2;
    default:
      return 0;
  }
}

describe('Validação de operações matemáticas', () => {
  it('não permite divisão por zero', () => {
    expect(calcular(10, 0, 'divisao')).toBe('Erro: Divisão por zero');
  });

  it('operações com números negativos', () => {
    expect(calcular(-5, -3, 'soma')).toBe(-8);
    expect(calcular(-5, 3, 'soma')).toBe(-2);
    expect(calcular(-5, -3, 'subtracao')).toBe(-2);
    expect(calcular(-5, 3, 'subtracao')).toBe(-8);
    expect(calcular(-2, -2, 'multiplicacao')).toBe(4);
    expect(calcular(-6, 2, 'divisao')).toBe(-3);
  });
});
