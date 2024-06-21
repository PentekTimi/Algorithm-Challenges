function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
      score += 4;
    } else if (array2[i] == "") {
      continue;
    } else {
      score -= 1;
    }
  }

  return score > 0 ? score : 0;
}

//or

function checkExam(array1, array2) {
  const arr = array2.map((el, i) =>
    array1[i] === el ? 4 : el === "" ? 0 : -1
  );
  return arr.reduce((a, b) => a + b, 0) > 0
    ? arr.reduce((a, b) => a + b, 0)
    : 0;
}
