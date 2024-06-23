function dashatize(num) {
  return num
    .toString()
    .replace(/[13579]/g, "-$&-")
    .replace(/\-+/g, "-")
    .replace(/^\-/, "")
    .replace(/\-$/, "");
}

//or

function dashatize(num) {
  return isNaN(num)
    ? "NaN"
    : num
        .toString()
        .match(/([13579]|[02468]+)/g)
        .join("-");
}
