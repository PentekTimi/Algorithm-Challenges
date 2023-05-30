function sum(str) {

    // declare a helper function
    function first(str) {
        // check if number is of one character, if yes return that character
        if(str.length === 1) return str
        // otherwise return the first character + sum function with the shorter string missing the first character
        return (Number(str.substring(0, 1)) + Number(sum(str.substring(1, str.length)))).toString()
    }

    // check if the result is of length 1, if yes return result, else call first function recursively
    let result = first(str);
    return result.length === 1 ? result : first(result);
    
}

// Try sum("493193") = 2
sum("493193")