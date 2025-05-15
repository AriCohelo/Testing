const { sum, subs, mult, div } = require('./calcFunc');

test('sums two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

test('substract two numbers', () => {
  expect(subs(3, 2)).toBe(1);
});

test('multipply two numbers', () => {
  expect(mult(3, 2)).toBe(6);
});

test('divide two numbers', () => {
  expect(div(6, 2)).toBe(3);
});
