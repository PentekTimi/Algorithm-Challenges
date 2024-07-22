var reverse = function (num) {
  const reversedNumber = parseInt(
    Math.abs(num).toString().split("").reverse().join("")
  );

  if (reversedNumber > 2147483647) {
    return 0;
  }

  return num < 0 ? -Math.abs(reversedNumber) : reversedNumber;
};

//or

var reverse = function (x) {
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;
  let isneg = x < 0;
  let rev = 0;
  x = Math.abs(x);
  while (x) {
    let digit = x % 10;
    x = Math.floor(x / 10);

    if (rev > (INT_MAX - digit) / 10) {
      return 0;
    }
    rev = rev * 10 + digit;
  }
  return isneg ? -rev : rev;
};
