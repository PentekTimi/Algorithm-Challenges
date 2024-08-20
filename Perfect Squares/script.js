var numSquares = function (n) {
  const maxSquareRoot = Math.floor(Math.sqrt(n));
  const minSquares = Array(n + 1).fill(Infinity);
  minSquares[0] = 0;

  for (let squareRoot = 1; squareRoot <= maxSquareRoot; ++squareRoot) {
    const square = squareRoot * squareRoot;
    for (let j = square; j <= n; ++j) {
      minSquares[j] = Math.min(minSquares[j], minSquares[j - square] + 1);
    }
  }

  return minSquares[n];
};
