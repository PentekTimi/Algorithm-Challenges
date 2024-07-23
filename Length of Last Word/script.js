var lengthOfLastWord = function (s) {
  s = s.trim();
  let arr = s.split(" ");

  return arr[arr.length - 1].length;
};

//or

var lengthOfLastWord = function (s) {
  s = s.split(" ");
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== "") return s[i].length;
    else continue;
  }
};
