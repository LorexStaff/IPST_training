const array = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5];

// Функция для сравнения элементов при сортировке
function compareNumbers(a, b) {
  return a - b;
}

// Сортировка массива выборкой
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// Бинарный поиск
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1; // Элемент не найден
}

const sortedArray = selectionSort([...array]);
console.log("Отсортированный массив:", sortedArray);

const index = binarySearch(sortedArray, 0);

if (index !== -1) {
  console.log(`Элемент 0 найден по индексу: ${index}`);
} else {
  console.log("Элемент 0 не найден");
}
