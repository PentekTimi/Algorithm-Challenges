var longestCommonPrefix = function (strs) {
  let initial = strs[0].split("");
  let result = "";
  for (let i = 0; i < initial.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (initial[i] !== strs[j][i]) {
        return result;
      }
    }
    result += initial[i];
  }

  return result;
};

//or

var longestCommonPrefix = function (strs) {
  if (strs === 0) return "";
  strs.sort();
  let start = strs[0];
  let end = strs[strs.length - 1];
  i = 0;
  while ((i < start.length) & (start[i] === end[i])) {
    i++;
  }
  return start.substring(0, i);
};
