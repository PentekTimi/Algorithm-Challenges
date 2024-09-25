var checkRecord = function (s) {
  let arr = s.split("");
  let absent = arr.filter((x) => x === "A").length;
  let currentLate = 0;
  let largestLate = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "L") {
      currentLate = 0;
    } else {
      currentLate++;
    }

    if (currentLate > largestLate) largestLate = currentLate;
  }

  return absent < 2 && largestLate < 3;
};

//or

var checkRecord = function (s) {
  let absents = 0;

  // Check if absent less than 2 times
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      absents++;
      if (absents >= 2) {
        return false;
      }
    }
  }

  // Check if there are 3 or more consecutive 'L's
  if (s.includes("LLL")) {
    return false;
  }

  return true;
};
