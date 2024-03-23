function getMiddle(s) {
  if (s.length % 2 === 0) {
    let lastIndex = s.length / 2;
    return s[lastIndex - 1] + s[lastIndex];
  }

  let index = Math.floor(s.length / 2);
  return s[index];
}

//or

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}
