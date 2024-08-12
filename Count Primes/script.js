var countPrimes = function (n) {
  if (n === 0) return 0;
  let counter = 0;
  let startingNum = n - 1;

  while (startingNum !== 0) {
    let prime = isPrime(startingNum);
    if (prime) counter++;
    startingNum--;
  }

  return counter;
};

function isPrime(num) {
  return !/^1?$|^(11+?)\1+$/.test("1".repeat(num));
}

var countPrimes = function (n) {
  if (n <= 2) return 0;
  let prime = new Array(n).fill(true);
  prime[0] = prime[1] = false;
  for (let p = 2; p * p <= n; p++) {
    if (prime[p]) {
      for (let i = p * p; i <= n; i += p) {
        prime[i] = false;
      }
    }
  }

  let arr = prime.filter((x) => x === true);
  return arr.length;
};
