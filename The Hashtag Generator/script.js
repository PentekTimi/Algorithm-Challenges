function generateHashtag(str) {
  if (str.trim().length === 0) return false;

  let arr = str.split(" ");
  arr.map((word, i) => (arr[i] = word.charAt(0).toUpperCase() + word.slice(1)));
  let result = "#" + arr.join("");
  return result.length > 140 ? false : result;
}
