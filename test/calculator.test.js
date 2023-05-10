const Calculator = require('../calculator.js');

describe('Add method', () => {
  test('test 4 + 5 should be 9', () => {
    const calculator = new Calculator(4, 5);
    const sum = calculator.add();
    expect(sum).toBe(9);
  });

  test('test 50 add 10 should be 60', () => {
    const calculator = new Calculator(50, 10);
    const sum = calculator.add();
    expect(sum).toBe(60);
  });
});

describe('subtract method', () => {
  test('test 4 - 5 should be -1', () => {
    const calculator = new Calculator(4, 5);
    const subtract = calculator.subtract();
    expect(subtract).toBe(-1);
  });

  test('test 50 - 10 should be 40', () => {
    const calculator = new Calculator(50, 10);
    const subtract = calculator.subtract();
    expect(subtract).toBe(40);
  });
});

describe('divide method', () => {
  test('test 10 / 5 should be 2', () => {
    const calculator = new Calculator(10, 5);
    const divide = calculator.divide();
    expect(divide).toBe(2);
  });

  test('test 0 / 10 should be 0', () => {
    const calculator = new Calculator(0, 10);
    const divide = calculator.divide();
    expect(divide).toBe(0);
  });

  test('test 10 / 0 should be infinity', () => {
    const calculator = new Calculator(10, 0);
    expect(() => calculator.divide()).toThrow('result is infinity');
  });
});
