function spinWords(string) {
  let wordsArray = string.split(" ");
  console.log(wordsArray);
  wordsArray.forEach((word, i) => {
    if (word.length > 4) {
      wordsArray[i] = word.split("").reverse().join("");
    }
  });

  return wordsArray.join(" ");
}
