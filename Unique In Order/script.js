var uniqueInOrder = function (iterable) {
  console.log(iterable);
  if (iterable.length === 0) return [];
  let result = [iterable[0]];
  for (let i = 0; i < iterable.length - 1; i++) {
    if (iterable[i] != iterable[i + 1]) {
      result.push(iterable[i + 1]);
    }
  }

  return result;
};

//or

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
