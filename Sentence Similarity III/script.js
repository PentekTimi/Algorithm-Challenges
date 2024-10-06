var areSentencesSimilar = function (sentence1, sentence2) {
  var str1 = sentence1.split(" ");
  var str2 = sentence2.split(" ");

  var i1 = 0;
  var i2 = 0;
  var j1 = str1.length - 1;
  var j2 = str2.length - 1;

  while (i1 <= j1 && i2 <= j2) {
    if (str1[i1] === str2[i2] && str1[j1] === str2[j2]) {
      i1++;
      i2++;
      j1--;
      j2--;
    } else if (str1[i1] === str2[i2]) {
      i1++;
      i2++;
    } else if (str1[j1] === str2[j2]) {
      j1--;
      j2--;
    } else {
      return false;
    }
  }
  return true;
};
