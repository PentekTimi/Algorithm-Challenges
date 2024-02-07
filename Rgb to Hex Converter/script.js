function rgb(r, g, b) {
  return (
    convertToHex(r).toUpperCase() +
    convertToHex(g).toUpperCase() +
    convertToHex(b).toUpperCase()
  );
}

function convertToHex(input) {
  let value;
  if (input < 0) {
    value = 0;
  } else if (input > 255) {
    value = 255;
  } else {
    value = Math.round(input);
  }
  const hex = value.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// OR

function rgb(r, g, b) {
  return [r, g, b]
    .map(function (x) {
      return ("0" + Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    })
    .join("")
    .toUpperCase();
}
