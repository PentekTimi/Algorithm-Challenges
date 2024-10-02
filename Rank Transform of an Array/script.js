var arrayRankTransform = function (arr) {
  let sortedArr = arr.toSorted((a, b) => a - b);
  let rank = 1;
  let ranks = {};
  for (let i = 0; i < sortedArr.length; i++) {
    if (!ranks[sortedArr[i]]) {
      ranks[sortedArr[i]] = rank;
      rank++;
    }
  }
  return arr.map((num) => ranks[num]);
};
