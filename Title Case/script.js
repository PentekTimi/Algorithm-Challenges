function titleCase(title, minorWords) {
  if (title.length == 0) return "";
  let arr = title.split(" ");
  let optionals =
    minorWords == undefined ? [] : minorWords.toLowerCase().split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (optionals.includes(arr[i].toLowerCase()) && i != 0) {
      arr[i] = arr[i].toLowerCase();
    } else {
      if (arr[i].length > 1) {
        arr[i] = arr[i].toLowerCase();
        arr[i] =
          arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1, arr[i].length);
      } else {
        arr[i] = arr[i].toUpperCase();
      }
    }
  }
  return arr.join(" ");
}

//or

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

function titleCase(title, minorWords) {
  var titleAr = title.toLowerCase().split(" "),
    minorWordsAr = minorWords ? minorWords.toLowerCase().split(" ") : [];

  return titleAr
    .map(function (e, i) {
      return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e;
    })
    .join(" ");
}
