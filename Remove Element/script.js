var removeElement = function (nums, val) {
  let right = nums.length - 1;
  let left = 0;

  while (left < right) {
    if (nums[left] === val) {
      if (nums[right] === val) {
        right--;
      } else {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
      }
    } else {
      left++;
    }
  }
  console.log(nums);
  return nums.splice(0, right).length;
};

var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};
