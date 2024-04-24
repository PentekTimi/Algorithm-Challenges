function high(x) {
  let arr = x.split(" ");
  let result = 0;
  let index = "";
  arr.map((word) => {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      let position = word[i].toLowerCase().charCodeAt() - 96;
      sum += position;
    }

    if (sum > result) {
      result = sum;
      index = word;
    }
  });

  return index;
}
