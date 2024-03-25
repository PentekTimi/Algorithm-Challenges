function isIsogram(str) {
  let letters = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (letters[str[i]]) {
      return false;
    }
    letters[str[i]] = 1;
  }

  return true;
}
