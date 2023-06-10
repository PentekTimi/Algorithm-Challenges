function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};
    //    Add the letters of the word as keys in an object that also increment if the letter is found multiple times
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    //  Loop through the second word and check if the letters are found in the lookup object, if yes decrement their value by 1, otherwise return false
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];

        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}