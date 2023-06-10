function countUniqueValues(arr){
    // if the array length is zero return 0. this is an edge case
    if (arr.length === 0) return 0;
    let count = 1;
    // loop through the array comparing items next to each other, if they are different increment count
    for (let i = 0; i < arr.length - 1; i++) {
        let j = i + 1;
        if (arr[i] != arr[j]) {
          count++;
          }
        }
    return count;
  }


  //Other solution
  function countUniqueValues(arr){
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
          i++;
          arr[i] = arr[j]
          }
        }
    return i + 1;
  }