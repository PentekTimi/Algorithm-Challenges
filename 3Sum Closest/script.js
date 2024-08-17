var threeSumClosest = function (nums, target) {
  let closestToTarget = nums[0] + nums[1] + nums[nums.length - 1];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 2; i++) {
    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const subTotal = sortedNums[left] + sortedNums[right] + sortedNums[i];

      if (subTotal == target) {
        return subTotal;
      } else if (subTotal < target) {
        left++;
      } else {
        right--;
      }

      if (Math.abs(subTotal - target) < Math.abs(closestToTarget - target)) {
        closestToTarget = subTotal;
      }
    }
  }
  return closestToTarget;
};
