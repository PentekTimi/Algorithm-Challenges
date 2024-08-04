var sortColors = function (nums) {
  let count = {
    0: 0,
    1: 0,
    2: 0,
  };

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = count[nums[i]] + 1;
  }

  let index = 0;
  for (let color in count) {
    for (let i = 0; i < count[color]; i++) {
      nums[index] = Number(color);
      index++;
    }
  }

  return nums;
};
