var addDigits = function (num) {
  let result = num;

  while (result > 9) {
    result = result
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }

  return result;
};

var addDigits = function (num) {
  if (num === 0) {
    return 0;
  } else {
    return 1 + ((num - 1) % 9);
  }
};
