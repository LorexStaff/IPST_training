function findUniqueCharacters(str) {
  let uniqueChars = "";

  for (let char of str) {
    if (!uniqueChars.includes(char)) {
      uniqueChars += char;
    }
  }

  return uniqueChars;
}

const inputString = "DDADSADASDAAADS";
const uniqueCharacters = findUniqueCharacters(inputString);

console.log(uniqueCharacters);
