var findShortestSubArray = function (nums) {
  var hash = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) hash.set(nums[i], hash.get(nums[i]) + 1);
    else hash.set(nums[i], 1);
  }

  // find the max frequency
  var max_count = 0,
    res = -1;
  var subArrLen = 1000;

  hash.forEach((value, key) => {
    if (key == nums[0]) {
      subArrLen = nums.lastIndexOf(key) - nums.indexOf(key) + 1;
      max_count = value;
    }
    if (max_count <= value) {
      console.log(value, key, max_count, subArrLen);
      console.log("inside if");
      //find res first and last index
      let firstIndex = nums.indexOf(key);
      let lastIndex = nums.lastIndexOf(key);
      let indexRes = lastIndex - firstIndex + 1;
      console.log(indexRes);
      if (indexRes < subArrLen || value > max_count) {
        res = key;
        subArrLen = indexRes;
        max_count = value;
      }
    }
  });

  return subArrLen;
};

var findShortestSubArray = function (nums) {
  let left = {},
    right = {},
    count = {};
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
    if (left[x] === undefined) left[x] = i;
    right[x] = i;
    count[x] = (count[x] || 0) + 1;
  }
  let ans = nums.length;
  let degree = Math.max(...Object.values(count));
  for (let x in count) {
    if (count[x] === degree) {
      ans = Math.min(ans, right[x] - left[x] + 1);
    }
  }
  return ans;
};
