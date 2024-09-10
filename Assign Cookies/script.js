var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let gPointer = 0;
  let sPointer = 0;
  let output = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[sPointer] >= g[gPointer]) {
      output++;
      gPointer++;
      sPointer++;
    } else {
      sPointer++;
    }
  }

  return output;
};

var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let content = 0;
  let cookie = 0;
  while (cookie < s.length && content < g.length) {
    if (s[cookie] >= g[content]) {
      content++;
    }
    cookie++;
  }
  return content;
};
