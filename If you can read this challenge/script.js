function toNato(words) {
  let wordsArr = words.replace(/ /g, "").split("");
  let resultArr = [];

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].match(/[a-zA-Z]/)) {
      resultArr.push(NATO[wordsArr[i].toUpperCase()]);
    } else {
      resultArr.push(wordsArr[i]);
    }
  }

  return resultArr.join(" ");
}
