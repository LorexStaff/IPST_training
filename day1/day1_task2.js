const str = "hello alexandr!";

const words = str.split(" ");

function repeatChar(char, count) {
  return Array(count + 1).join(char);
}

const result = words.map((word) => {
  return repeatChar(word[0], word.length);
});

const output = result.join(" ");

console.log(output);
