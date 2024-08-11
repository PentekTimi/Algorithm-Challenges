var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let midPoint =
    nums.length % 2 === 0 ? nums.length / 2 : Math.floor(nums.length / 2);

  while (left < right) {
    if (nums[midPoint] > nums[right]) {
      left = midPoint + 1;
    } else if (nums[midPoint] < nums[right]) {
      right = midPoint;
    }
    midPoint = Math.floor((left + right) / 2);
  }

  return nums[left];
};
