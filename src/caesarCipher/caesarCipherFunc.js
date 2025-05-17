function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}

function shiftLetter(char, shift) {
  const charCode = char.charCodeAt(0);
  const base = char.toLowerCase() === char ? 97 : 65;
  const shiftedCode = ((charCode - base + shift + 26) % 26) + base;
  return String.fromCharCode(shiftedCode);
}

function caesarCipher(str, shift) {
  shift = shift % 26;
  return str
    .split('')
    .map((char) => (isLetter(char) ? shiftLetter(char, shift) : char))
    .join('');
}

module.exports = caesarCipher;
