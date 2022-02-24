// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const characterMap = {};
    let max = 0;
    let maxChar = '';

for(let char of str){
   if(characterMap[char]){
        characterMap[char]++
    } else {
        characterMap[char] = 1;
    } 
  }  
  for (let char in characterMap) {
      if(characterMap[char]>max){
          max = characterMap[char];
          maxChar = char;
      }
  }
  return maxChar;
}

module.exports = maxChar;
