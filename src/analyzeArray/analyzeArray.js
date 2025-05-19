function analyzeArray(array) {
  const average = array.reduce((acc, val) => acc + val) / array.length;
  const min = array.reduce((acc, val) => (acc < val ? acc : val));
  const max = array.reduce((acc, val) => (acc > val ? acc : val));
  const length = array.length;

  return { average, min, max, length };
}
module.exports = analyzeArray;
