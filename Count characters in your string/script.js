function count(string) {
  if (string.length == 0) return {};

  let obj = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] in obj) {
      obj[string[i]]++;
    } else {
      obj[string[i]] = 1;
    }
  }

  return obj;
}

//or

function count(string) {
  var count = {};
  string.split("").forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}
