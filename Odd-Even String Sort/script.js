function sortMyString(S) {
  let even = "";
  let odd = "";

  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      even += S[i];
    } else {
      odd += S[i];
    }
  }

  return even + " " + odd;
}

// or

const sortMyString = (s) => {
  let even = s
    .split("")
    .filter((v, i) => i % 2 === 0)
    .join("");
  let odd = s
    .split("")
    .filter((v, i) => i % 2 !== 0)
    .join("");
  return even + " " + odd;
};
