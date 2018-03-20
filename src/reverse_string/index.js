// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const reversed = [];

  str
    .split('')
    .forEach((char) => reversed.unshift(char));

  return reversed.join('');
}

module.exports = reverse;

// 1 solution
//
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// 2 solution
//
// function reverse(str) {
//   let revStr = '';
//
//   for (let character of str) {
//     revStr = character + revStr;
//   }
//
//   return revStr;
// }

// 3 solution
//
// function reverse(str) {
//   return str
//     .split('')
//     .reduce((rev, char) => rev = char + rev, '');
// }
