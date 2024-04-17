function pigIt(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() != arr[i].toUpperCase()) {
      arr[i] = arr[i].substring(1) + arr[i][0] + "ay";
    }
  }
  return arr.join(" ");
}
