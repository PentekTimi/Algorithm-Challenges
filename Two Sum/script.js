const twoSum = function (nums, target) {
  let indices = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length - 1; j++) {
      if (nums[i] + nums[j + 1] === target) {
        indices = [i, j + 1];
        break;
      }
    }
  }

  return indices;
};

var twoSumV2 = function (nums, target) {
  // Step 1: Create a hashmap to store the value and its index
  const map = new Map();

  //Step 2: Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Step 3: Calculate the complement of the current element
    const complement = target - nums[i];
    // Step 4: Check if the complement exists in the map
    if (map.has(complement)) {
      // If it exists, return the indices
      return [map.get(complement), i];
    }

    // Step 5: If it doesn't exist, add the current element to the map
    map.set(nums[i], i);
  }

  // Step 6: If no solution is found, return an empty array (this line is usally never reached because the problem guarantees on solutions)
  return [];
};

var twoSumV3 = function (nums, target) {
  let obj = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let val = target - nums[i];
    if (val in obj) {
      result = [obj[val], i];
      break;
    }

    obj[nums[i]] = i;
    console.log(obj);
  }

  return result;
};
