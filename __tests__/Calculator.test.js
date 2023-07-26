
const Calculator = require('../src/Calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add method', () => {
    test('should add two numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(-5, 10)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
    });
  });

  describe('subtract method', () => {
    test('should subtract two numbers correctly', () => {
      expect(calculator.subtract(10, 5)).toBe(5);
      expect(calculator.subtract(0, 0)).toBe(0);
      expect(calculator.subtract(-5, -2)).toBe(-3);
    });
  });

  describe('multiply method', () => {
    test('should multiply two numbers correctly', () => {
      expect(calculator.multiply(5, 3)).toBe(15);
      expect(calculator.multiply(0, 10)).toBe(0);
      expect(calculator.multiply(-2, -2)).toBe(4);
    });
  });

  describe('divide method', () => {
    test('should divide two numbers correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(20, 4)).toBe(5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed.');
    });
  });
});
