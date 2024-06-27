var flat = function (arr, n) {
  let result = [];

  const flatten = (array, depth) => {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && depth < n) {
        flatten(array[i], depth + 1);
      } else {
        result.push(array[i]);
      }
    }
    return result;
  };

  return flatten(arr, 0);
};

//

var flat = function (arr, n) {
  if (n === 0) return arr;
  const result = [];
  const flatten = (numbers, depth = 0) => {
    for (let ele of numbers) {
      if (Array.isArray(ele) && depth < n) {
        flatten(ele, depth + 1);
      } else {
        result.push(ele);
      }
    }
  };
  flatten(arr);
  return result;
};

//or

var flat = function (arr, n) {
  return arr.flat(n);
};
