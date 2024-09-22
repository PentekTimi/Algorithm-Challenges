var reverseWords = function (s) {
  const arr = s.split(" ");

  const result = arr.map((a) => {
    const temp = a.split("");
    return temp.reverse().join("");
  });

  return result.join(" ");
};
