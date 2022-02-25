// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   //creating an object to place/adding each characters of the string
   const charMap = {};
   //placeholder for counting the maximum value
   let max = 0;
   //placeholder for the character that been found the most
   let maxChar = '';

   //'for of' loop iterating in an array or a string or iterable object
   for (let character of str) {
      //Goal is to add 'character' to object 'characters'
      //characters[character] will referrence to the value of 'character' and add it to 'characters'
      //if nothing exist right now, set the value to 1 otherwise if there's value exist increment to 1
      if (!charMap[character]) {
         charMap[character] = 1;
      } else {
         charMap[character]++;
      }
   }
   //'for in' iterating on actual object or javascript of object
   //'char' represents the keys not the values
   for (let char in charMap) {
      if (charMap[char] > max) {
         max = charMap[char];
         maxChar = char;
      }
   }
   return maxChar;
}

module.exports = maxChar;
