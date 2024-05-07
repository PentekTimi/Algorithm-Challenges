function revrot(str, sz) {
  if (sz <= 0 || str == "" || sz > str.length) return "";

  let substr = str.match(new RegExp(".{1," + sz + "}", "g"));
  let result = "";

  if (substr[substr.length - 1].length < sz) {
    substr.pop();
  }

  for (let i = 0; i < substr.length; i++) {
    let sumOfDigits = calcSum(substr[i]);

    if (sumOfDigits % 2 === 0) {
      result += substr[i].split("").reverse().join("");
    } else {
      result += substr[i].slice(1) + substr[i].slice(0, 1);
    }
  }

  return result;
}

function calcSum(str) {
  let arr = str.split("");
  let sum = arr.map((x) => Number(x)).reduce((acc, val) => acc + val, 0);
  return sum;
}
