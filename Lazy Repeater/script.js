function makeLooper(str) {
  let index = 0;
  return function () {
    let char = str[index];
    index = (index + 1) % str.length;
    return char;
  };
}

//or

function makeLooper(str) {
  let i = 0;
  return () => str[i++ % str.length];
}
