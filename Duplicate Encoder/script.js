function duplicateEncode(word) {
  word = word.toLowerCase();
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      result += "(";
    } else {
      result += ")";
    }
  }
  return result;
}
