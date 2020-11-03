const calculator = require('./calculator')

test('adds 1 + 1', () => {
    expect(calculator.add(1,1)).toBe(2);
});
  
test('subtracts 1 - 1', () => {
    expect(calculator.subtract(1,1)).toBe(0);
});

test('multiplies 1 * 1', () => {
    expect(calculator.multiply(1,1)).toBe(1);
});

test('divides 2 / 1', () => {
    expect(calculator.divide(2,1)).toBe(2);
});

test('adds "a" + 1', () => {
    expect(calculator.add("a",1)).toBe('Please enter two numbers');
});

test('subtracts "a" - 1', () => {
    expect(calculator.subtract("a",1)).toBe('Please enter two numbers');
});

test('multiplies "a" * 1', () => {
    expect(calculator.multiply("a",1)).toBe('Please enter two numbers');
});

test('divides "a" / 1', () => {
    expect(calculator.divide("a",1)).toBe('Please enter two numbers');
});

test('divides 1 / 0', () => {
    expect(calculator.divide(1,0)).toBe('Cannot divide by 0');
});