function validAnagram(wordOne, wordTwo){
    
    let word1 = wordOne.split("");
    let word2 = wordTwo.split("");
    let word1Frequency = {};
    let word2Frequency = {};
    
    if (word1.length != word2.length) {
        return false;
    }
    
    // create frequency object for the two words, meaning:
    // for every letter that appears in the word, save it as a key on the object and initialize it with a value of one
    // if the letter appears multiple times increment the keys value in the object
    for (let char of word1) {
        if (word1Frequency[char] > 0) {
           word1Frequency[char] += 1;
        } else {
            word1Frequency[char] = 1;
        }
    }
    
    for (let char of word2) {
        if (word2Frequency[char] > 0) {
           word2Frequency[char] += 1;
        } else {
            word2Frequency[char] = 1;
        }
    }
    
    // for every key in the first frequency object check if there is a matching key value pair in the seconf frequency object
    // if the key does not exist or the values are not the same return false
    for (let key in word1Frequency) {
        if (!word2Frequency[key] || word1Frequency[key] != word2Frequency[key]) {
            return false;
        }
     }
     
    //  if all the checks passed return true
     return true;
    
  }