function buddy(start, limit) {
  for (let i = start; i <= limit; i++) {
    let numDivisors = divisorSum(i) - 1;
    let possibleBuddy = undefined;
    if (numDivisors > i) {
      possibleBuddy = divisorSum(numDivisors) - 1;
    }

    if (i == possibleBuddy) {
      return [i, numDivisors];
    }
  }

  return "Nothing";
}

function divisorSum(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
}

//or solution to pass bigger numbers
function buddy(start, limit) {
  for (let i = start; i <= limit; i++) {
    let numDivisors = divisorSum(i);
    let possibleBuddy = undefined;
    if (numDivisors > i) {
      possibleBuddy = divisorSum(numDivisors);
    }

    if (i == possibleBuddy) {
      return [i, numDivisors];
    }
  }

  return "Nothing";
}

function divisorSum(num) {
  let sum = 0;
  for (let i = 1; i * i < num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) {
        sum += num / i;
      }
    }
  }
  return sum - num - 1;
}
