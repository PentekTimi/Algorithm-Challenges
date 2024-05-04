function deleteNth(arr, n) {
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 1;
    } else {
      if (count[arr[i]] < n) {
        count[arr[i]] = count[arr[i]] + 1;
      } else {
        arr.splice(i, 1);
        i--;
      }
    }
  }

  return arr;
}

//or

function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}
