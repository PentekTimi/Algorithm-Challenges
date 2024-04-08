function order(words) {
  if (words.length === 0) return "";
  let wordsList = words.split(" ");
  let resultsList = [...Array(wordsList.length).keys()];

  for (let i = 0; i < wordsList.length; i++) {
    let wordLocation = Number(wordsList[i].replace(/\D/g, ""));
    resultsList[wordLocation - 1] = wordsList[i];
  }

  return resultsList.join(" ");
}
