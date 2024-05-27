function incrementString(str) {
  let arr = str.split("");
  let num = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == Number(arr[i])) {
      num += arr[i];
      arr.pop();
    } else {
      break;
    }
  }
  num = num.split("").reverse().join("");
  console.log(arr, num);
  let newNum = (Number(num) + 1).toString();
  if (newNum.length < num.length) {
    let difference = num.length - newNum.length;
    newNum = "0".repeat(difference) + newNum;
  }
  console.log(newNum);
  return arr.join("") + newNum;
}

//or

let incrementString = (str) =>
  str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));
