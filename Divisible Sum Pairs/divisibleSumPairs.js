function divisibleSumPairs(n, k, ar) {
    let counter = 0;
    //loop through the array 
    for (let i = 0; i < n; i++) {
        // for every iteration on the outer loop, start a second iteration one space right
        for (let j = i + 1; j < n; j++) {
            // if the sum is divisible by k, increment counter
            if ((ar[i] + ar[j]) % k === 0) {
                counter = counter + 1;
            }
        }
    }
    // return counter
    return counter;

}