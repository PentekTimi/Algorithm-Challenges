var climbStairs = function (n) {
  let steps = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    steps.push(steps[i - 1] + steps[i - 2]);
  }
  return steps[n];
};
