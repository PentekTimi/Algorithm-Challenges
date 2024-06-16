function chooseBestSum(t, k, ls) {
  if (ls.length < k) return null;
  let n = ls.length;
  let distancesResult = [];
  let biggestSum = null;

  let data = new Array(k);

  combinationUtil(ls, data, 0, n - 1, 0, k);

  //get all combinations
  function combinationUtil(arr, data, start, end, index, r) {
    let current = [];
    if (index == r) {
      for (let i = 0; i < r; i++) {
        current.push(data[i]);
      }
      distancesResult.push(current);
    }

    for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
      data[index] = arr[i];
      combinationUtil(arr, data, i + 1, end, index + 1, r);
    }
  }

  //compare sum of all array combinations
  let sum = 0;
  for (let i = 0; i < distancesResult.length; i++) {
    sum = distancesResult[i].reduce((a, b) => a + b, 0);
    if (sum <= t && sum >= biggestSum) {
      biggestSum = sum;
    }
  }

  return biggestSum;
}

//or

function chooseBestSum(t, k, ls) {
  let arr = [];

  function rec(sum, ar, n) {
    if (n == 0) {
      arr.push(sum);
    } else {
      for (let i = 0; i < ar.length; i++) {
        rec(sum + ar[i], ar.slice(i + 1), n - 1);
      }
    }
  }

  rec(0, ls, k);

  var sol = arr.sort((a, b) => b - a).find((a) => a <= t);
  return typeof sol === "undefined" ? null : sol;
}
