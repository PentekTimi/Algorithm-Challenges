var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length; i++) {
    if (i != nums[i]) {
      return i;
    }
  }
};

//or

var missingNumber = function (nums) {
  const length = nums.length;
  const actualSum = nums.reduce((acc, curr) => acc + curr);
  const purposedSum = (length * (length + 1)) / 2;

  return purposedSum - actualSum;
};
