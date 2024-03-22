function duplicateCount(text) {
  let values = [];
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (text.lastIndexOf(text[i]) != i) {
      if (!values.includes(text[i])) {
        values.push(text[i]);
      }
    }
  }
  return values.length;
}
