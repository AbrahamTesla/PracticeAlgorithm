// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//    const vowels = [];
//    let word = str.toLowerCase().split('');

//    for (let letter of word) {
//       if (
//          letter === 'a' ||
//          letter === 'i' ||
//          letter === 'e' ||
//          letter === 'o' ||
//          letter === 'u'
//       )
//          vowels.push(letter);
//    }
//    if (vowels === null) {
//       return 0;
//    } else {
//       return vowels.length;
//    }
// }

//Using the 'includes' method & a counter
function vowels(str) {
   let count = 0;
   //Declare a variable 'checker' to check if this vowel exist 'aieou'
   const checker = ['a', 'e', 'i', 'o', 'u'];

   for (let letter of str.toLowerCase()) {
      //checker includes the current character or letter then increment 'count by 1'
      if (checker.includes(letter)) {
         count++;
      }
   }
   return count;
}
module.exports = vowels;
