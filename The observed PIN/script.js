function getPINs(observed) {
  let pinIndexes = Array(observed.length).fill(0);
  let adjacentDigits = [];
  let result = [];

  //loop through the observed and add the adjacent numbers as array to the adjacentDigits arr
  for (let i = 0; i < observed.length; i++) {
    adjacentDigits.push(getAdjacent(Number(observed[i])));
  }

  //find the possible combinations
  result.push(getNextCombination(pinIndexes, adjacentDigits));

  while (canIncrement(pinIndexes, adjacentDigits)) {
    result.push(getNextCombination(pinIndexes, adjacentDigits));
  }

  return result;
}

//helper functions
function canIncrement(pinIndexes, adjacentDigits) {
  for (let i = 0; i < pinIndexes.length; i++) {
    pinIndexes[i]++;

    if (pinIndexes[i] >= adjacentDigits[i].length) {
      if (i == adjacentDigits.length - 1) {
        return false;
      }
      pinIndexes[i] = 0;
    } else {
      return true;
    }
  }
  return true;
}

function getNextCombination(pinIndexes, adjacentDigits) {
  let pin = "";

  for (let i = 0; i < pinIndexes.length; i++) {
    pin += adjacentDigits[i][pinIndexes[i]];
  }
  console.log(pin);
  return pin;
}

function getAdjacent(num) {
  switch (num) {
    case 1:
      return [1, 2, 4];
    case 2:
      return [1, 2, 3, 5];
    case 3:
      return [2, 3, 6];
    case 4:
      return [1, 4, 5, 7];
    case 5:
      return [2, 4, 5, 6, 8];
    case 6:
      return [3, 5, 6, 9];
    case 7:
      return [4, 7, 8];
    case 8:
      return [5, 7, 8, 9, 0];
    case 9:
      return [6, 8, 9];
    case 0:
      return [0, 8];
    default:
      throw new Error("Invalid key");
  }
}

//or

function getPINs(observed) {
  let pinIndexes = Array(observed.length).fill(0);
  let adjacentDigits = [];
  let result = [];

  //loop through the observed and add the adjacent numbers as array to the adjacentDigits arr
  for (let i = 0; i < observed.length; i++) {
    adjacentDigits.push(getAdjacent(Number(observed[i])));
  }

  return getCombn(adjacentDigits);
}

function getCombn(arr, pre) {
  pre = pre || "";

  if (!arr.length) {
    return pre;
  }

  let ans = arr[0].reduce(function (ans, value) {
    return ans.concat(getCombn(arr.slice(1), pre + value));
  }, []);
  return ans;
}

function getAdjacent(num) {
  switch (num) {
    case 1:
      return [1, 2, 4];
    case 2:
      return [1, 2, 3, 5];
    case 3:
      return [2, 3, 6];
    case 4:
      return [1, 4, 5, 7];
    case 5:
      return [2, 4, 5, 6, 8];
    case 6:
      return [3, 5, 6, 9];
    case 7:
      return [4, 7, 8];
    case 8:
      return [5, 7, 8, 9, 0];
    case 9:
      return [6, 8, 9];
    case 0:
      return [0, 8];
    default:
      throw new Error("Invalid key");
  }
}

//or

function getPINs(observed) {
  var observed = observed.split("");
  var pins = [];
  var va = {
    0: ["0", "8"],
    1: ["1", "2", "4"],
    2: ["1", "2", "3", "5"],
    3: ["2", "3", "6"],
    4: ["1", "4", "5", "7"],
    5: ["2", "4", "5", "6", "8"],
    6: ["3", "5", "6", "9"],
    7: ["4", "7", "8"],
    8: ["0", "5", "7", "8", "9"],
    9: ["6", "8", "9"],
  };

  for (var i in observed) {
    var possible = va[observed[i]];
    pins.push(possible);
  }

  return pins.reduce(function (a, b) {
    var result = [];
    for (var x in a) {
      for (var y in b) {
        result.push(a[x] + b[y]);
      }
    }
    return result;
  });
}
