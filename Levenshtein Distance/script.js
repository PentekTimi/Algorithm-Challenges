function levenshtein(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const arr = [];
  for (let i = 0; i <= b.length; i++) {
    arr[i] = [i];
    for (let j = 1; j <= a.length; j++) {
      arr[i][j] =
        i === 0
          ? j
          : Math.min(
              arr[i - 1][j] + 1,
              arr[i][j - 1] + 1,
              arr[i - 1][j - 1] + (a[j - 1] === b[i - 1] ? 0 : 1)
            );
    }
  }
  return arr[b.length][a.length];
}

function levenshtein(a, b) {
  return distance(a, b, a.length, b.length);

  function distance(a, b, x, y) {
    if (!x) return y;
    if (!y) return x;

    return Math.min(
      distance(a, b, x - 1, y) + 1,
      distance(a, b, x, y - 1) + 1,
      distance(a, b, x - 1, y - 1) + (a[x - 1] != b[y - 1] ? 1 : 0)
    );
  }
}
