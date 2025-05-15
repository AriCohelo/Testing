const { capitalize, reverseString } = require('./stringFunc');

test('capitalizes the first letter', () => {
  expect(capitalize('ari')).toBe('Ari');
});

test('reverses a string', () => {
  expect(reverseString('ari')).toBe('ira');
});
