const smallest = (n) => {
  const log = { number: n, fromIndex: 0, toIndex: 0 };
  const numbers = n.toString().split("");

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue;
      const newArr = [...numbers];
      newArr.splice(i, 1);
      newArr.splice(j, 0, numbers[i]);

      const compareNumber = Number(newArr.join(""));

      if (compareNumber < log.number) {
        log.number = compareNumber;
        log.fromIndex = i;
        log.toIndex = j;
        console.log(
          "log updated",
          compareNumber,
          "from index",
          i,
          "to index",
          j
        );
      }
    }
  }
  return [log.number, log.fromIndex, log.toIndex];
};

//or

function smallest(n) {
  let minNum = n,
    indexIn = 0,
    indexOut = 0;
  n = String(n).split("");
  for (let i = 0; i < n.length; i++) {
    let dublicate = [].concat(n);
    dublicate.splice(i, 1);
    for (let j = 0; j < n.length; j++) {
      let secondDublicate = [].concat(dublicate);
      secondDublicate[j] = n[i] + (dublicate[j] || "");
      let number = +secondDublicate.join("");
      if (number < minNum) {
        minNum = number;
        indexIn = i;
        indexOut = j;
      }
    }
  }
  return [minNum, indexIn, indexOut];
}
