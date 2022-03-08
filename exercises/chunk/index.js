// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
   //create a variable 'chunked' as empty array
   let chunked = [];

   //create a variable 'last' to represent the last element
   let last = chunked[chunked.length - 1];

   //'for of' to iterate the array
   for (let element of array) {
       //to get the last element in the chunked array
      let last = chunked[chunked.length - 1];
      if (!last || last.length === size) {
          //pushed it chunked array.
         chunked.push([element]);
      } else {
          //push the last element and put it to the chunk since it's not full
         last.push(element);
      }
   }

//    return chunked;
// }

function chunk(array, size) {
    //using a 'slice' method.  e.g. array.slice(0,3) = starting from index '0' up to 3rd index but not including the element in the 3rd index.
   const chunked = [];
   let index = 0;

   while (index < array.length) {
      //e.g. index = 0, and index + size of 2.  Then, push that new array to the 'chunked' array
      chunked.push(array.slice(index, index + size));
      //then increment by size not incrementing by 1
      index += size;
   }
   return chunked;
}

module.exports = chunk;
