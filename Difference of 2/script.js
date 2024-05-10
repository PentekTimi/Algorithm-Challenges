function twosDifference(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let num = input[i] + 2;
    if (input.includes(num)) {
      result.push([input[i], num]);
    }
  }

  return result;
}

//or

function twosDifference(input) {
  return input
    .sort(function (a, b) {
      return a - b;
    })
    .filter(function (a) {
      return input.indexOf(a + 2) != -1;
    })
    .map(function (a) {
      return [a, a + 2];
    });
}
