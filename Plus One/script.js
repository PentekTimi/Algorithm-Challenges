var plusOne = function (digits) {
  let lastIndex = digits.length - 1;
  if (digits[lastIndex] != 9) {
    digits[lastIndex] = digits[lastIndex] + 1;
    return digits;
  }

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      return digits;
    }
  }
  digits.unshift("1");
  return digits;
};
