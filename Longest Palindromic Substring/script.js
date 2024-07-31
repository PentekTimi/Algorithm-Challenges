var longestPalindrome = function (string) {
  let palindromeLength = 0;
  let left = 0;
  let right = 0;

  var getLongestPalindrome = function (leftPosition, rightPosition) {
    while (
      leftPosition >= 0 &&
      rightPosition < string.length &&
      string[leftPosition] === string[rightPosition]
    ) {
      leftPosition--;
      rightPosition++;
    }

    if (rightPosition - leftPosition > palindromeLength) {
      left = leftPosition + 1;
      right = rightPosition - 1;
      palindromeLength = right - left + 1;
    }
  };

  for (let i = 0; i < string.length; i++) {
    getLongestPalindrome(i, i + 1);
    getLongestPalindrome(i, i);

    if ((string.length - i) * 2 < palindromeLength) {
      break;
    }
  }

  return string.slice(left, right + 1);
};
