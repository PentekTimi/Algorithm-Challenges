var generateKey = function (num1, num2, num3) {
  let [ans, k] = [0, 1];
  for (let i = 0; i < 4; ++i) {
    const x = Math.min(
      ((num1 / k) | 0) % 10,
      ((num2 / k) | 0) % 10,
      ((num3 / k) | 0) % 10
    );
    ans += x * k;
    k *= 10;
  }
  return ans;
};

var generateKey = function (num1, num2, num3) {
  ans = [];

  for (let i = 1; i <= 4; i++) {
    d1 = num1.toString().at(-i) || 0;
    d2 = num2.toString().at(-i) || 0;
    d3 = num3.toString().at(-i) || 0;

    ans.unshift(Math.min(d1, d2, d3));
  }

  return Number(ans.join(""));
};
