function firstNSmallest(array, n) {
  while (array.length != n) {
    array.splice(array.lastIndexOf(Math.max(...array)), 1);
  }
  return array;
}
