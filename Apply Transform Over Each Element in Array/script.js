var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }

  return arr;
};

//or

var map = function (arr, fn) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(fn(arr[i], i));
  }

  return output;
};
