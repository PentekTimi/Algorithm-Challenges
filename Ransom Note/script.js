var canConstruct = function (ransomNote, magazine) {
  for (let i = 0; i < magazine.length; i++) {
    if (ransomNote.includes(magazine[i])) {
      ransomNote = ransomNote.replace(magazine[i], "");
    }
  }

  return ransomNote.length === 0 ? true : false;
};
