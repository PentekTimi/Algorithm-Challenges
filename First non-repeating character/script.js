function firstNonRepeatingLetter(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let count = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[i].toLowerCase() === s[j].toLowerCase()) {
        count++;
      }
    }
    if (count === 1) return s[i];
  }
  return result;
}

// OR

function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}
