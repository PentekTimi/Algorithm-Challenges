function solve(s) {
  const handleSign = (a, b) =>
    (a === "+" ? 1 : -1) * (b === "+" ? 1 : -1) === 1 ? "+" : "-";

  let str = "";
  let currSign = "+";
  let signs = [currSign];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (/[+-]/.test(char)) {
      currSign = char;
    } else if (/[()]/.test(char)) {
      if (char === "(") {
        signs.push(handleSign(signs[signs.length - 1], currSign));
        currSign = "+";
      } else {
        signs.pop();
      }
    } else if (/[a-z]/i.test(char)) {
      const nxt = handleSign(signs[signs.length - 1], currSign);
      str += (!str.length && nxt === "+" ? "" : nxt) + char;
      currSign = "+";
    }
  }
  return str;
}
