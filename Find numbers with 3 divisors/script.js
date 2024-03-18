function solution(n, m) {
  let resultArray = [];
  let start = n;
  let end = m;

  for (let i = start; i <= end; i++) {
    let divisorArray = divisorNumber(i, 1);
    if (divisorArray.length - 2 === 3) {
      resultArray.push(i);
    }
  }
  return resultArray;
}

function divisorNumber(num, d) {
  if (num == 2) return [1, 2];
  if (num / d < 2) return [num];
  if (num % d == 0) return [d, ...divisorNumber(num, d + 1)];
  return divisorNumber(num, d + 1);
}

// to handle BigInt
function solution(n, m) {
  function countDivisors(num) {
    let count = BigInt(0);
    for (let i = BigInt(2); i * i <= num; i++) {
      if (num % i === BigInt(0)) {
        if (i * i !== num)
          // Not a perfect square
          count += BigInt(2);
        // Perfect square
        else count += BigInt(1);
      }
      if (count > BigInt(3))
        // If more than 3 divisors, no need to continue
        return false;
    }
    return count === BigInt(3);
  }

  const result = [];
  for (let i = n; i <= m; i++) {
    if (countDivisors(BigInt(i))) {
      result.push(BigInt(i));
    }
  }
  return result;
}

// solution using prime check
function solution(n, m) {
  // Find the range where potential prime squares could lie
  const nRoot = BigInt(Math.ceil(Math.sqrt(Math.sqrt(parseInt(n)))));
  const mRoot = BigInt(Math.floor(Math.sqrt(Math.sqrt(parseInt(m)))));

  const result = [];

  // Iterate through the potential prime squares
  for (let i = nRoot; i <= mRoot; i++) {
    if (isPrime(i)) {
      // Push the fourth power of primes within the range
      result.push(i ** 4n);
    }
  }

  return result;
}

// Function to check if a number is prime
function isPrime(num) {
  if (num < 2n) return false;
  if (num === 2n) return true;
  if (num % 2n === 0n) return false;

  const limit = BigInt(Math.floor(Math.sqrt(parseInt(num))));
  for (let i = 3n; i <= limit; i += 2n) {
    if (num % i === 0n) return false;
  }

  return true;
}
