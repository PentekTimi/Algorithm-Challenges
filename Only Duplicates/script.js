function onlyDuplicates(str) {
  let duplicates = [];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (duplicates.includes(str[i])) {
      result += str[i];
    } else {
      if (str.indexOf(str[i]) != str.lastIndexOf(str[i])) {
        duplicates.push(str[i]);
        result += str[i];
      }
    }
  }
  return result;
}

//or

function onlyDuplicates(str) {
  return str
    .split("")
    .filter((e) => str.indexOf(e) != str.lastIndexOf(e))
    .join("");
}
