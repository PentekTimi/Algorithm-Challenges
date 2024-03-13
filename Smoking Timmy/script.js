function startSmoking(bars, boxes) {
  let initialAmount = bars * 10 * 18 + boxes * 18;

  let extra = initialAmount % 5;
  let cigCount = (initialAmount - extra) / 5;
  let totalRerolledCig = cigCount;

  while (cigCount + extra >= 5) {
    let newCigCount = extra + cigCount;
    extra = newCigCount % 5;
    let divisionRes = (newCigCount - extra) / 5;
    cigCount = divisionRes;
    totalRerolledCig += cigCount;
  }

  return initialAmount + totalRerolledCig;
}
