function moveZeros(arr) {
  let count = 0;
  let val;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      val = arr[i];
      count++;
      arr.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < count; i++) {
    arr.push(val);
  }

  return arr;
}

// OR

var moveZeros = function (arr) {
  return [...arr.filter((n) => n !== 0), ...arr.filter((n) => n === 0)];
};
