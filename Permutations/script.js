var permute = function (nums) {
  const result = [];

  if (nums.length === 1) {
    return [[...nums]];
  }

  for (let i = 0; i < nums.length; i++) {
    const n = nums.shift();
    const perms = permute(nums);

    for (let perm of perms) {
      perm.push(n);
      result.push(perm);
    }
    nums.push(n);
  }
  return result;
};

var permute = function (nums) {
  const permutations = [];
  const path = [];
  const dfs = (index) => {
    if (index === nums.length) {
      permutations.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) {
        continue;
      }
      path.push(nums[i]);
      dfs(index + 1);
      path.pop();
    }
  };
  dfs(0);

  return permutations;
};
