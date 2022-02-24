// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//1st solution
// function palindrome(str) {
//    let reversed = '';

//    for (let character of str) {
//       reversed = character + reversed;
//    }
//    if (reversed === str) {
//       return true;
//    } else {
//       return false;
//    }
// }

//2nd Solution - 'i' second argument which represents the index of the first array to have access to the other side of the string
//-1 to consider that element is e.g. 5 but array indexing is 4.
//-1 to increment to the loop in reverse
function palindrome(str) {
   return str.split('').every((character, i) => {
      return character === str[str.length - i - 1];
   });
}
module.exports = palindrome;
