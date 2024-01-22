function makeNegative(num) {
    if(num === 0) return 0;
    return -Math.abs(num);
}

// OR

function makeNegative(num) {
    return num > 0 ? -num : num
}