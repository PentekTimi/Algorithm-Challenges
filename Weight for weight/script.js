function orderWeight(strng) {
  let arr = strng
    .split(" ")
    .sort((a, b) => sumOfString(a) - sumOfString(b) || (a > b ? 1 : -1));
  return arr.join(" ");
}

function sumOfString(num) {
  return num
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
}
