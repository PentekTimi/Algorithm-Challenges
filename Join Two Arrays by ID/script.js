var join = function (arr1, arr2) {
  let result = {};
  let arr = [...arr1, ...arr2];

  for (let obj of arr) {
    let id = obj.id;
    if (result[id]) {
      result[id] = { ...result[id], ...obj };
    } else {
      result[id] = obj;
    }
  }

  return Object.values(result);
};

//or

var join = function (arr1, arr2) {
  let res = {};
  let concatArr = arr1.concat(arr2);
  for (x = 0; x < concatArr.length; x++) {
    let key = concatArr[x].id;
    res[key] = res[key] ? { ...res[key], ...concatArr[x] } : concatArr[x];
  }
  return Object.values(res);
};
