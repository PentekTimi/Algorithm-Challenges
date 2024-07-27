var isPalindrome = function (input) {
  return input == input.toString().split("").reverse().join("");
};

//or

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let str = x.toString();
  let i = 0,
    j = str.length - 1;
  while (i <= j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
