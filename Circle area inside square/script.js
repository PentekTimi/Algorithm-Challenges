function squareAreaToCircle(size) {
  let radius = Math.sqrt(size) / 2;
  return Number((Math.pow(radius, 2) * Math.PI).toFixed(8));
}
