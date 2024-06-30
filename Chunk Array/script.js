var chunk = function (arr, size) {
  let chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    let subarr = arr.slice(i, Math.min(i + size, arr.length));
    chunks.push(subarr);
  }
  return chunks;
};

//or

var chunkArr = function (arr, size) {
  let result = [];
  while (arr.length > 0) {
    result.push(arr.slice(0, 0 + size));
    arr = arr.slice(0 + size);
  }

  return result;
};
