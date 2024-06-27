function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let numbersArray = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4];
let stringsArray = ["one", "two", "three"];

let sortedNumbersArray = bubbleSort(numbersArray);

let mergedArray = sortedNumbersArray.concat(stringsArray);

console.log(mergedArray);
