function gimmeTheLetters(sp) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let range = sp.split("-");

  let start = alphabet.indexOf(range[0].toLowerCase());
  let end = alphabet.indexOf(range[1].toLowerCase());

  let result = alphabet.slice(start, end + 1);

  return range[0] === range[0].toLowerCase() ? result : result.toUpperCase();
}
