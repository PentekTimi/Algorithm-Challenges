function findOdd(A) {
  let uniqueArray = Array.from(new Set(A));

  for (let i = 0; i < uniqueArray.length; i++) {
    let tempArray = A.filter((num) => num === uniqueArray[i]);
    if (tempArray.length % 2 != 0) return uniqueArray[i];
  }
}
