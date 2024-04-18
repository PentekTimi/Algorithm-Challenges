function cakes(recipe, available) {
  let count = Number.MAX_SAFE_INTEGER;
  for (const key in recipe) {
    if (key in available) {
      let num = Math.floor(available[key] / recipe[key]);
      count = num < count ? num : count;
    } else {
      return 0;
    }
  }
  return count;
}
