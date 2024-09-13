var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = (right - left) * Math.min(height[left], height[right]);
  let area;

  while (left < right) {
    area = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(area, maxArea);

    if (height[left] <= height[right]) {
      left++;
    } else if (height[left] > height[right]) {
      right--;
    }
  }

  return maxArea;
};
