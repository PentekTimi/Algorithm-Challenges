function descendingOrder(n) {
  let arr = n.toString().split("");
  return Number(arr.sort((a, b) => b - a).join(""));
}
