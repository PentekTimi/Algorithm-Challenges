function checkParity(parity, bin) {
  let arr = bin.split("");
  let l = arr.filter((x) => x == "1").length;
  let evenOrOdd = l % 2 == 0 ? "even" : "odd";

  return evenOrOdd == parity ? 0 : 1;
}
