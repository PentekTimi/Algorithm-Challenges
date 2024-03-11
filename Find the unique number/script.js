function findUniq(arr) {
  let index = arr.findIndex((num) => arr.indexOf(num) === arr.lastIndexOf(num));
  return arr[index];
}
