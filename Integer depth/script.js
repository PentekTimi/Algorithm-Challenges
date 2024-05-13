function computeDepth(x) {
  let digits = [];
  let count = 1;

  while (digits.length != 10) {
    let multiplication = x * count;
    let numArr = multiplication.toString().split("");
    numArr.map((el) => {
      if (!digits.includes(el)) {
        digits.push(el);
      }
    });
    count++;
  }
  return count - 1;
}

//or

function computeDepth(x) {
  var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var depth = 0;
  var multiple;

  while (digits.length) {
    multiple = (x * ++depth).toString();
    digits = digits.filter((v) => multiple.indexOf(v) === -1);
  }

  return depth;
}
