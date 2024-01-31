function productFib(prod) {
  let a = 0;
  let b = 1;
  let c;

  while (a * b < prod) {
    c = b;
    b = a + c;
    a = c;
  }

  if (a * b === prod) {
    return [a, b, true];
  } else {
    return [a, b, false];
  }
}

// OR

function productFib(prod) {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}
