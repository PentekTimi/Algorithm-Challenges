//return the total number of smiling faces in the array
function countSmileys(arr) {
  if (arr.length == 0) return 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(")") || arr[i].includes("D")) {
      if (arr[i][0] == ":" || arr[i][0] == ";") {
        if (arr[i].length == 3) {
          if (arr[i][1] == "-" || arr[i][1] == "~") {
            count++;
          }
        } else if (arr[i].length == 2) {
          count++;
        }
      }
    }
  }
  return count;
}

//or

function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

//or

function countSmileys(arr) {
  return arr.reduce((n, s) => (/^[:;][-~]?[)D]$/.test(s) ? n + 1 : n), 0);
}
