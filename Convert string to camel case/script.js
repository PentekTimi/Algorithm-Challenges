function toCamelCase(str) {
  if (str.length === 0) return str;
  let arr = str.split(/[-_]/);
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join("");
}
