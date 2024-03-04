const getOptionsCount = (target, arr) => {
  const memo = {};

  function helper(target, arr) {
    if (target in memo) return memo[target];
    if (target === "") return 1;

    let totalCount = 0;

    for (let word of arr) {
      if (target.indexOf(word) === 0) {
        const suffix = target.slice(word.length);
        const ways = helper(suffix, arr);
        totalCount += ways;
      }
    }

    memo[target] = totalCount;
    return totalCount;
  }

  return helper(target, arr);
};
