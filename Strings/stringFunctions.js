function capitalize(str) {
  return str.length !== 0 ? str[0].toUpperCase() + str.slice(1) : str;
}
function reverseString(str) {
  return str.split('').reverse().join('');
}
module.exports = { capitalize, reverseString };
