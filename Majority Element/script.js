var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  let majority = nums.length / 2;
  let result = 0;
  let answer;
  let i = 0;
  while (i < nums.length) {
    let currentEl = nums[i];
    let firstIndex = nums.indexOf(currentEl);
    let lastIndex = nums.lastIndexOf(currentEl);
    let count = lastIndex - firstIndex + 1;
    if (count > majority && count > result) {
      result = count;
      answer = i;
    }
    i = lastIndex + 1;
  }

  return nums[answer];
};

var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

var majorityElement = function (nums) {
  const n = nums.length;
  nums.sort((x, y) => {
    return x - y;
  });

  let freq = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1]) freq++;
    else freq = 1;

    if (freq > Math.floor(n / 2)) return nums[i];
  }
  return nums[0];
};
