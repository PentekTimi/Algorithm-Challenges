function solution(string) {
  let solution = "";
  if (string.length === 0) return solution;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      solution += ` ${string[i]}`;
    } else {
      solution += string[i];
    }
  }
  return solution;
}

//or

function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}
