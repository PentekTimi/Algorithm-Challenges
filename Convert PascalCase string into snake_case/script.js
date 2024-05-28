function toUnderscore(string) {
  string = string.toString();
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] != string[i].toLowerCase()) {
      if (i === 0) {
        result += string[i].toLowerCase();
      } else {
        result = result + "_" + string[i].toLowerCase();
      }
    } else {
      result += string[i];
    }
  }
  return result;
}

//or

const toUnderscore = (string) => {
  return string
    .toString()
    .split(/(?=[A-Z])/)
    .join("_")
    .toLowerCase();
};
