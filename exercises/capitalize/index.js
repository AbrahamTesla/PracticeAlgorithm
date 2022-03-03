// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//    //create an Array for place holder of the words
//    const words = [];

//    //create a for loop that will loop to string. Use the split method passing a space string. Push method to push the words in the array
//    for (let word of str.split(' ')) {
//       words.push(word[0].toUpperCase() + word.slice(1));
//    }
//    //Return the array of string using 'join' method with a space parameter.
//    return words.join(' ');
// }
function capitalize(str) {
   //Capitalize the first index
   let result = str[0].toUpperCase();

   //Use for-loop to loop thru starting on index 1.
   //then if-else statement to look thru the left of the word, if there's a space, capitalized the next character

   for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === ' ') {
         result += str[i].toUpperCase();
      } else {
         result += str[i];
      }
   }

   return result;
}

module.exports = capitalize;
