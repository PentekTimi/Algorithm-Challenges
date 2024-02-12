function calc(n, f) {
  let result = f(n);

  for (let i = 2; i <= n; i++) {
    let temp = n / BigInt(i);
    let q = f(temp);
    result += q;
  }

  return result;
}

// Correct solution

function calc(n, f) {
  let result = 0n;
  let iteration = 1n;

  while (iteration <= n) {
    let temp = n / iteration;
    let q = n / temp;
    result += (q - iteration + 1n) * f(temp);
    iteration = q + 1n;
  }

  return result;
}
