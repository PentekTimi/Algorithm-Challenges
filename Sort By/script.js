var sortBy = function (arr, fn) {
  let sortedArr = arr.sort((a, b) => fn(a) - fn(b));
  return sortedArr;
};

//

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => {
    return fn(a) - fn(b);
  });
};
