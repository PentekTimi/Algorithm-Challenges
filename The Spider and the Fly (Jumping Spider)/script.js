var spiderToFly = function (spider, fly) {
  const spiderCoords = getCoordinates(spider);
  const flyCoords = getCoordinates(fly);

  const distance = Math.sqrt(
    Math.pow(flyCoords.x - spiderCoords.x, 2) +
      Math.pow(flyCoords.y - spiderCoords.y, 2)
  );

  return distance.toFixed(5);
};

function getCoordinates(coord) {
  //get index of radial relative to A
  const radial = coord[0].charCodeAt(0) - "A".charCodeAt(0);
  const ring = parseInt(coord.substring(1));

  const x = ring * Math.cos((radial * Math.PI) / 4);
  const y = ring * Math.sin((radial * Math.PI) / 4);
  return { x, y };
}
