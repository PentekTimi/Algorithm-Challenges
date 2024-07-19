var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArr = [...nums1, ...nums2];
  mergedArr.sort((a, b) => a - b);

  let middle = Math.floor(mergedArr.length / 2);
  if (mergedArr.length % 2 === 0) {
    return (mergedArr[middle - 1] + mergedArr[middle]) / 2;
  } else {
    return mergedArr[middle];
  }
};

//or

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
  const m = nums1.length,
    n = nums2.length;
  const total = m + n;
  const half = (total + 1) >> 1;

  let left = 0,
    right = m;
  while (left <= right) {
    const i = (left + right) >> 1;
    const j = half - i;

    const left1 = i > 0 ? nums1[i - 1] : -Infinity;
    const left2 = j > 0 ? nums2[j - 1] : -Infinity;
    const right1 = i < m ? nums1[i] : Infinity;
    const right2 = j < n ? nums2[j] : Infinity;

    if (left1 <= right2 && left2 <= right1) {
      if (total & 1) return Math.max(left1, left2);
      return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
    } else if (left1 > right2) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
};
