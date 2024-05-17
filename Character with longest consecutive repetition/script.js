function longestRepetition(s) {
  let count = s.length > 0 ? 1 : 0;
  let char = s.length > 0 ? s[0] : "";

  for (let i = 0; i < s.length - 1; i++) {
    let current_char = s[i];
    let next_char = s[i + 1];
    let tracker = 1;

    while (current_char === next_char) {
      tracker += 1;
      i += 1;
      next_char = s[i + 1];
    }
    if (tracker > count) {
      count = tracker;
      char = current_char;
    }
  }
  return [char, count];
}
