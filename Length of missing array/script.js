function getLengthOfMissingArray(arrayOfArrays) {
  if (!Array.isArray(arrayOfArrays)) return 0;
  if (arrayOfArrays.length === 0 || arrayOfArrays.includes(null)) return 0;

  let sortedArr = arrayOfArrays.sort((a, b) => a.length - b.length);

  let l = sortedArr[0].length;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i].length === 0) return 0;
    if (sortedArr[i].length != l) {
      return l;
    }
    l++;
  }
}
