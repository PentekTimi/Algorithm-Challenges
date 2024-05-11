function minimumNumber(numbers) {
  let sum = numbers.reduce((a, b) => a + b);
  let initialValue = sum;
  let continueCheck = true;

  while (continueCheck) {
    if (isPrime(sum)) {
      continueCheck = false;
    }
    sum++;
  }

  return sum - initialValue - 1;
}

function isPrime(num) {
  if (num == 1) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
