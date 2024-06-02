function divisibleByLast(n) {
  let result = [false];
  n = n.toString().split("");
  n.map((x) => Number(x));
  for (let i = 1; i < n.length; i++) {
    if (n[i] % n[i - 1] === 0) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
