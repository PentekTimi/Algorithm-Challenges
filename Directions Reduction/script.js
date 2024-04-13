function dirReduc(arr) {
  function checkArr(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (
        (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
        (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
        (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
        (arr[i] === "WEST" && arr[i + 1] === "EAST")
      ) {
        count++;
      }
    }
    return count > 0;
  }

  while (checkArr(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (
        (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
        (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
        (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
        (arr[i] === "WEST" && arr[i + 1] === "EAST")
      ) {
        arr.splice(i, 2);
      }
    }
  }

  return arr;
}

//or

function dirReduc(arr) {
  var str = arr.join(""),
    pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, "");
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
