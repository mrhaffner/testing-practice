const capitalize = require('./capitalize');

test('capitalizes all lower', () => {
  expect(capitalize('matt')).toBe('MATT');
});

test('capitalize word remains capitalized', () => {
  expect(capitalize('STEVESIE')).toBe('STEVESIE');
});

test('can handle input with variable capitalization', () => {
  expect(capitalize('pOoKiE')).toBe('POOKIE');
});

test('handles numbers', () => {
  expect(capitalize(1)).toBe('Please enter a string');
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