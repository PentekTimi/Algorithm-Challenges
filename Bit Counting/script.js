var countBits = function (n) {
  const result = n.toString(2).replaceAll("0", "").length;
  return result;
};
