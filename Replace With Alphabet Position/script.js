function alphabetPosition(text) {
  let result = "";
  text = text.replace(/[^a-zA-Z]/g, "").toUpperCase();
  for (let i = 0; i < text.length; i++) {
    let letterCode = text.charCodeAt(i);
    if (letterCode > 64 && letterCode < 91) {
      result += letterCode - 64 + " ";
    }
  }
  return result.trim();
}
