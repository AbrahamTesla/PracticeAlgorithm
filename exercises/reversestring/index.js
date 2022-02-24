// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 1st Solutions
// function reverse(str) {
//    return str.split('').reverse().join('');
// }

//2nd Solution
// function reverse(str) {
//    let reversed = '';

//    for (let character of str) {
//       reversed = character + reversed;
//    }
//    return reversed;
// }

//3rd Solution - reduce() method condensed the array elements into one.  Take's an initial argument empty string ''.
function reverse(str) {
   return str
      .split('')
      .reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
