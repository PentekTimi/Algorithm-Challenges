function squareDigits(num) {
  let result = "";
  const numArray = Array.from(String(num), Number);

  for (let i = 0; i < numArray.length; i++) {
    let value = numArray[i] ** 2;
    result += String(value);
  }
  return Number(result);
}

// OR

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}
