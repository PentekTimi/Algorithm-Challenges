var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor(nums.length / 2);

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (target < nums[mid] && target >= nums[left]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }

  return nums[left] === target ? left : -1;
};

var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((r - l) / 2 + l);
    if (nums[mid] === target) return mid;
    if (nums[l] <= nums[mid]) {
      // left sorted
      if (target >= nums[l] && target < nums[mid]) {
        // target in sorted
        r = mid - 1;
      } else {
        // target in unsorted
        l = mid + 1;
      }
    } else {
      // right sorted
      if (target <= nums[r] && target > nums[mid]) {
        // target in sorted
        l = mid + 1;
      } else {
        // target in unsorted
        r = mid - 1;
      }
    }
  }
  return -1;
};
