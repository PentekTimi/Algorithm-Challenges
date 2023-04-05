function matchingStrings(strings, queries) {
    //initalise empty result array
    let result = []; 
    //iterate through the queries array
    for (let i = 0; i < queries.length; i++) {
        //set the counter varibale to zero for each iteration on the queries array
        let counter = 0;
        //iterate through all the strings array and check for matches
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) {
                //if match is found, increment counter
                counter = counter + 1;
            }
        }
        //push the counter variable to the result array once the iteration finished on the strings array
        result.push(counter)
    }
    //return the result array
    return result;
}