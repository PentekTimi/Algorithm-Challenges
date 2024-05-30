function oddOrEven(array) {
  if (array.length === 0) return "even";
  let sum = array.reduce((a, b) => a + b, 0);
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

//or

function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}
