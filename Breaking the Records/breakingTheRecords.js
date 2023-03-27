function breakingRecords(scores) {
    //declare min, max and their counters
    let min = scores[0];
    let countMin = 0;
    let max = scores[0];
    let countMax = 0;
    
    //loop through the array and check every item if it is smaller than the min or bigger than the max
    //if item is smaller/bigger than min/max increment the counter accordingly
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i];
            countMin++;
        }
        if (scores[i] > max) {
            max = scores[i];
            countMax++;
        }
    }
    //return the result as an array as specified in the problem
    return[countMax, countMin]
}