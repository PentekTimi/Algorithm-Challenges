function solution(text, markers) {
  // if there are no markers return text
  if (markers.length === 0) {
    return text.trimEnd();
  }

  //otherwise check if there is something that needs to be removed

  // split text at each new line ('\n')
  let textArray = text.split("\n");
  // var to hold end result
  let result = "";

  // loop through the textArray
  for (let i = 0; i < textArray.length; i++) {
    let tempText = textArray[i];
    // initialize addition with tempText and trim the end of the string
    // this var will be updated if text contains one of the markers
    let addition = tempText.trimEnd();

    // check for all marker characters if any is included
    markers.every((char) => {
      // if char is present in text remove everything after it and update addition
      if (tempText.includes(char)) {
        let indexOfChar = tempText.indexOf(char);
        // update text in case it contains more chars from markers array
        tempText = tempText.slice(0, indexOfChar);
        addition = tempText.slice(0, indexOfChar).trimEnd();
        if (addition === "") return false;
      }
      return true;
    });

    // add the addition value to the result prepending it with a \n
    result += "\n" + addition;
  }

  // return result removing the first \n
  return result.substring(1);
}

// OR

function solution(input, markers) {
  return input
    .split("\n")
    .map((str) => markers.reduce((s, m) => s.split(m)[0], str).trimEnd())
    .join("\n");
}
