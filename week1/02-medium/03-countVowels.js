/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";
  for (char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return `vowel counts in ${str} : ${count}`;
}

console.log(countVowels("helIlo"));
