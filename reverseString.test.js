const capitalize = require('./reverseString');

test('handles 2 letters', () => {
  expect(capitalize('ma')).toBe('am');
});

test('handles multiple words', () => {
  expect(capitalize('mix mix')).toBe('xim xim');
});

test('handles numbers', () => {
  expect(capitalize(12)).toBe('Please enter a string');
});

test('handles truthy', () => {
  expect(capitalize(true)).toBe('Please enter a string');
});

test('handles falsey', () => {
  expect(capitalize(true)).toBe('Please enter a string');
});

test('handles undefined variables', () => {
  expect(() => capitalize(pete)).toThrow();
  expect(() => capitalize(pete)).toThrow(Error);
});