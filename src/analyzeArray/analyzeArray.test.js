const analyzeArray = require('./analyzeArray');

test(`takes an array of numbers and returns and object 
    containing average, min, max and length`, () => {
  expect(analyzeArray([2, 9, 5, 7, 3])).toStrictEqual({
    average: 5.2,
    min: 2,
    max: 9,
    length: 5,
  });
});
