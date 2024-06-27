function fibonacciSequence(limit) {
  let a = 0,
    b = 1,
    c = 0;
  console.log(a);
  console.log(b);

  while (a + b <= limit) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

fibonacciSequence(200);
