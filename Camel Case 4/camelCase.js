//we will save the changed words in an array
let solutionArray = [];
    
function processData(input) {
    //we get a string of words, we can split that string into an array after each /n character
    //so for example there are 4 words squashed together, once splitted we will have an array
    //with 4 words all having the following format: "S;V;iPad\r" ---- this is the first string in the array
    const wordsArray = input.replaceAll(";","").split("\r\n");
    //['SViPad\r', 'CMmouse pad\r', 'CCcode swarm\r', 'SCOrangeHighlighter']
    
    //after we have the array we will have to do something for each item in the array
    //first we will have to check what are the operation details. to make this easier we could even
    //remove the ; characters. this way we have to check for char 0 and char 1 in the string always
    
    //to make operating on the word easier we can detach the first two characters for the operation
    //details. Instead of 'SViPad\r' we would have 'iPad\r'.
    wordsArray.forEach((word) => {
        let operationDetails = word[0] + word[1];
        word = word.substring(2);
        let lastTwoCharacters = word.slice(-2)
        //if the word has the \r as ending we will remove it
        if (lastTwoCharacters === "\r") {
            word = word.slice(0, -2)
        }
        //if it is a split operation we have to split based on where is an uppercase letter and return 
        //everything back with spaces and lowercase
        if(operationDetails === "SV" || operationDetails === "SC") {
            split(word)
        } else if (operationDetails === "SM") {
            if(word.slice(-2) === "()") {
                word = word.slice(0, -2);
            }
            split(word)
        //if it is a combine operation, we have to remove the spaces and capitalize the words                    //accordingly, and in the case of method add the () at the end
        } else if (operationDetails === "CV") {
            combine(word, 1, false)
        } else if (operationDetails === "CC") {
            combine(word, 0, false)
        } else if (operationDetails === "CM") {
            combine(word, 1, true)
        } else {
            console.log("Error. This is not a split or combine operation.")
        }
    })
    
    //the result will be printed by joining the words of the array with a \n new line addition
    console.log(solutionArray.join('\r\n'));
}

// function for split operation
function split(input) {
    let newStr = "";
    
    for (let i = 0; i < input.length; i++) {
        let originalStr = input[i];
        let upperCaseStr = input[i].toUpperCase();
        
        if(originalStr === upperCaseStr) {
            newStr = newStr + " " + originalStr;
        } else {
            newStr = newStr + originalStr;
        }
    }
    //change the str to lowercase and remove spaces from beginning or end of string. Push the solution
    //to the array
    newStr = newStr.toLowerCase().trim();
    solutionArray.push(newStr)
}

// function for combine operation
function combine(input, startOfIteration, method) {
    const combineWordsArray = input.split(" ");
    for (let i = startOfIteration; i < combineWordsArray.length; i++) {
        combineWordsArray[i] = combineWordsArray[i].charAt(0).toUpperCase() + combineWordsArray[i].slice(1);
    }
    let solution = combineWordsArray.join("");
    if (method) {
        solution  = solution + "()";
    }
    solutionArray.push(solution)
}