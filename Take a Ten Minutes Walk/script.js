function isValidWalk(walk) {
  if (walk.length === 10) {
    let n = 0;
    let s = 0;
    let w = 0;
    let e = 0;
    for (let i = 0; i < walk.length; i++) {
      switch (true) {
        case walk[i] === "n":
          n++;
          break;
        case walk[i] === "s":
          s++;
          break;
        case walk[i] === "w":
          w++;
          break;
        case walk[i] === "e":
          e++;
          break;
      }
    }
    if (n === s && w === e) {
      return true;
    }
  }
  return false;
}
