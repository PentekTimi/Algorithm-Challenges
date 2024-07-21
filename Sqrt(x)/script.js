var mySqrt = function (x) {
  let i = 1;
  while (i * i <= x) {
    i++;
  }

  return i - 1;
};

//or

var mySqrt = function (x) {
  if (x < 2) return x;

  var left = 1,
    right = x,
    result = 0;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }
  return result;
};
