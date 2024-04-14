decodeMorse = function (morseCode) {
  morseCode = morseCode.trim();
  let words = morseCode.split("   ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split(" ");
    letters.forEach((letter) => {
      result += MORSE_CODE[letter];
    });
    result += " ";
  }
  return result.trim();
};

//or

decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split(/  | /)
    .map((code) => MORSE_CODE[code] || " ")
    .join("");
};
