function doubleEveryOther(a) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 != 0) {
      result.push(a[i] * 2);
    } else {
      result.push(a[i]);
    }
  }
  return result;
}

const doubleEveryOther = (a) => a.map((c, i) => (i % 2 == 0 ? c : 2 * c));

function doubleEveryOther(a) {
  for (let i = 1; i < a.length; i += 2) {
    a[i] *= 2;
  }
  return a;
}
