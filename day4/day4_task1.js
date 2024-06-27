function objectToArray(obj) {
  return Object.entries(obj);
}

const result = objectToArray({ a: 1, b: 2 });
console.log(result);
