function isIntArray(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return true;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number" || !Number.isInteger(arr[i])) {
      return false;
    }
  }
  return true;
}

//or

function isIntArray(arr) {
  return (
    Array.isArray(arr) &&
    arr.every(function (x) {
      return Math.floor(x) === x;
    })
  );
}
