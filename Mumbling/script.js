function accum(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let iteration = i + 1;
    let currentVal = add(iteration, s[i]);
    result.push(currentVal);
  }
  return result.join("-");
}

function add(n, letter) {
  letter = letter.toLowerCase();
  let repeatedLetters = letter.repeat(n);
  repeatedLetters = repeatedLetters[0].toUpperCase() + repeatedLetters.slice(1);
  return repeatedLetters;
}
