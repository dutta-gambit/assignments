/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const myMap = new Map();
  const myMapObj = new Map();


  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if(str1.length != str2.length){
    return false;
  }

  for(let i = 0; i < str1.length; i++){
    if(myMap.has(str1[i])){
      myMap.set(str1[i],   myMap.get(str1[i]) + 1 )
    }
    else{
      myMap.set(str1[i], 1);
    }
  }


  for(let i = 0; i < str2.length; i++){
    if(myMapObj.has(str2[i])){
      myMapObj.set(str2[i],   myMapObj.get(str2[i]) + 1 )
    }
    else{
      myMapObj.set(str2[i], 1);
    }
  }

  for(const key of myMap.keys()){
    if(myMap.get(key) !== myMapObj.get(key)){
      return false;
    }
  }


  for(const key of myMapObj.keys()){
    if(myMap.get(key) !== myMapObj.get(key)){
      return false;
    }
  }
  return true;

}

module.exports = isAnagram;
