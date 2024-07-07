Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];
  let resultArr = [];

  for (let i = 0; i < rowsCount; i++) {
    const tmpArr = [];

    for (let j = 0; j < colsCount; j++) {
      let isHonestCol = j % 2 === 0;
      if (isHonestCol) {
        tmpArr.push(this[i + rowsCount * j]);
      } else {
        const col = Math.min(j + 1, colsCount);
        tmpArr.push(this[rowsCount * col - 1 - i]);
      }
    }

    resultArr.push(tmpArr);
  }
  return resultArr;
};
