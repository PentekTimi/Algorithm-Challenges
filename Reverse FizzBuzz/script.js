function reverseFizzBuzz(s) {
  if (s === "Fizz") return [3];
  if (s === "Buzz") return [5];
  if (s === "FizzBuzz") return [15];
  if (s === "Fizz Buzz") return [9, 10];
  if (s === "Buzz Fizz") return [5, 6];
  let arr = s.split(" ");

  let startingNum;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() == arr[i].toUpperCase()) {
      startingNum = Number(arr[i]) - i;
      return createArray(arr.length, startingNum);
    }
  }
}

function createArray(len, startingNum) {
  let result = [];
  for (let i = startingNum; i < startingNum + len; i++) {
    result.push(i);
  }
  return result;
}
