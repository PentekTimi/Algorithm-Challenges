function getCount(str) {
  const vowels = "aeiou";
  let count = 0;
  for (const letter of str) {
    if (vowels.includes(letter)) count++;
  }
  return count;
}

//or

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
