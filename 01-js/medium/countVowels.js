/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
   const arr = ['a', 'e', 'i', 'o', 'u']
   let vowelCount = 0;
   const str1 = str.toLowerCase();
   for(let i = 0; i < str1.length; i++){
    if(arr.includes(str1[i])){
      vowelCount++;
    }
   }
   return vowelCount;
}

module.exports = countVowels;