const array = require('./array')

test('test length key', () => {
    expect(array([1,2,3])['length']).toBe(3);
});

test('test average', () => {
    expect(array([1,2,3])['average']).toBe(2);
});

test('test to find the smallest number', () => {
    expect(array([3,1,2])['min']).toBe(1);
});


test('test to find the largest number', () => {
    expect(array([3,1,2])['max']).toBe(3);
});
