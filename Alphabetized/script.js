function alphabetized(s) {
  s = s.replace(/\s+|\W+|\d+|[_]+/g, "");
  return s
    .split("")
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join("");
}

//or

const alphabetized = (s) =>
  s.replace(/[^a-zA-Z]/g, "").split``.sort((x, y) =>
    x.toUpperCase() === y.toUpperCase()
      ? s.indexOf(x) - s.indexOf(y)
      : x.localeCompare(y)
  ).join``;
