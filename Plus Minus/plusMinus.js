function plusMinus(arr) {

    let zeroCount = 0;
    let positiveCount = 0;
    let negativeCount = 0;

    // loop through the array and increment counters for each positive, negative, and zero values when found
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount = zeroCount + 1;
        } else if (arr[i] > 0) {
            positiveCount = positiveCount + 1;
        } else {
            negativeCount = negativeCount + 1;
        }
    }
    
    // once array has been looped through calculate the ratios and convert them to have six decimal places
    let zeroRatio = (zeroCount/(arr.length)).toFixed(6);
    let positiveRatio = (positiveCount/arr.length).toFixed(6);
    let negativeRatio = (negativeCount/(arr.length)).toFixed(6);
    
    // print the result
    console.log(`${positiveRatio}
${negativeRatio}
${zeroRatio}`)
}