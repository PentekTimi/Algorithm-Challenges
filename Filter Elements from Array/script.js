var filter = function (arr, fn) {
  return arr.filter((el, i) => fn(el, i));
};

//or

var filter = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
};
