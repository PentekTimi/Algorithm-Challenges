function findEvenIndex(arr) {
  let leftSide = 0;
  let rightSide = 0;
  let currentCorrectIndex = -1;
  for (let i = 1; i < arr.length; i++) {
    rightSide += arr[i];
  }
  if (leftSide === rightSide) {
    currentCorrectIndex = 0;
    return currentCorrectIndex;
  }

  for (let i = 1; i < arr.length; i++) {
    leftSide += arr[i - 1];
    rightSide -= arr[i];

    if (leftSide === rightSide) {
      currentCorrectIndex = i;
      return currentCorrectIndex;
    }

    if (i === arr.length - 1) {
      rightSide = 0;
      leftSide += arr[i];
      if (rightSide === leftSide) {
        currentCorrectIndex = i;
      }
    }
  }

  return currentCorrectIndex;
}
