function sortArray(array) {
  const odds = array.filter((el) => el % 2).sort((a, b) => a - b);
  return array.map((el) => (el % 2 ? odds.shift() : el));
}

// or

function sortArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort(function (a, b) {
    return a - b;
  });

  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j] % 2 !== 0) {
      array[j] = odds.shift();
    }
  }

  return array;
}
