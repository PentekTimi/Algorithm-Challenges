function miniMaxSum(arr) {
    let min = 0;
    let max = 0;
    
    //sort the array from smallest to biggest number
    arr.sort((a, b) => a - b);
    
    //get the first 4 numbers and add them to the min variable
    for(let i = 0; i < 4; i++) {
        min += arr[i]
    }
    //get the last 4 numbers and add them to the max variable
    for(let j = arr.length - 1; j >= arr.length - 4; j--) {
        max += arr[j]
    }
    
    console.log(min + " " + max)

}