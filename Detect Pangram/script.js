function isPangram(string) {
  return new Set(string.toLowerCase().replace(/[^a-z]/g, "")).size === 26;
}

//or

function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}
