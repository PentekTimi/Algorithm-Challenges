var maxProduct = function (nums) {
  let maxSoFar = nums[0];
  let minSoFar = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];

    let tempMax = Math.max(curr, Math.max(maxSoFar * curr, minSoFar * curr));
    let tempMin = Math.min(curr, Math.min(maxSoFar * curr, minSoFar * curr));

    maxSoFar = tempMax;
    minSoFar = tempMin;
    max = Math.max(max, maxSoFar);
  }

  return max;
};
