//  Compare two clear strings
function validAnagram(str1, str2) {
    return cleanString(str1) === cleanString(str2);
  }
   
//   Convert string toLowerCase(), then convert string to array and sort() it, then convert back to string
  function cleanString(str) {
    return str
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }
