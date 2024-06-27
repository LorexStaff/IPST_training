function makePalindrome(word) {
  return word + word.split("").reverse().join("").slice(1);
}

const words = ["дим", "манек", "рота"];
const palindromes = words.map((word) => makePalindrome(word));

console.log(palindromes);
