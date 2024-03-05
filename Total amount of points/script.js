function points(games) {
  let result = 0;
  for (let i = 0; i < games.length; i++) {
    let tempArr = games[i].split(":");
    if (tempArr[0] > tempArr[1]) {
      result += 3;
    } else if (tempArr[0] === tempArr[1]) {
      result += 1;
    }
  }
  return result;
}
