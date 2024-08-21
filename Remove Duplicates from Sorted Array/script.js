var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

var removeDuplicates = function (nums) {
  let left = 0;
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[left]) {
      nums[i] = undefined;
    } else {
      result++;
      left = i;
    }
  }

  nums.sort((a, b) => a - b);

  return result;
};
