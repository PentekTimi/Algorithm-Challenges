function isItLetter(character) {
  return character.toLowerCase() != character.toUpperCase();
}

//or

function isItLetter(character) {
  return /[a-z]/i.test(character);
}
