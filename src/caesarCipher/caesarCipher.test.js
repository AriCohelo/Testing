const caesarCipher = require('./caesarCipherFunc');

test('shift characters of a string with a given number', () => {
  expect(caesarCipher('ari', 3)).toBe('dul');
});
