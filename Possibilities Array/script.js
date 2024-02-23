function isAllPossibilities(x) {
  if (x.length === 0) {
    return false;
  }

  for (let i = 0; i < x.length; i++) {
    if (!x.includes(i)) {
      return false;
    }
  }

  return true;
}
