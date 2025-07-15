/* 
 todo :  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g, "");
  str2 = str2.toLowerCase().replace(/\s/g, "");

  if (str1.length !== str2.length) return false;

  const sortedStr1 = str1.split("").sort().join();
  const sortedStr2 = str2.split("").sort().join();
  console.log(sortedStr1);
  console.log(sortedStr2);

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("hello", "lleho"));
