let twoDimArray = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

let oneDimArray = [];

for (let i = 0; i < twoDimArray.length; i++) {
  for (let j = 0; j < twoDimArray[i].length; j++) {
    oneDimArray.push(twoDimArray[i][j]);
  }
}

oneDimArray.sort((a, b) => a - b);

console.log(oneDimArray);
