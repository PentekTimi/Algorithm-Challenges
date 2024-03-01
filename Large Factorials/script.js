//handle small numbers
function factorial(num) {
  let result = num;

  if (num === 0 || num === 1) {
    result = 1;
    return result.toString();
  }

  while (num > 1) {
    num--;
    result = result * num;
  }

  return result.toString();
}

//handle large numbers

function factorial(n) {
  let res = new Array(500);
  let finalResult = "";

  // Initialize result
  res[0] = 1;
  let res_size = 1;

  // Apply simple factorial formula n! = 1 * 2 * 3 * 4...*n
  for (let x = 2; x <= n; x++) res_size = multiply(x, res, res_size);

  for (let i = res_size - 1; i >= 0; i--) {
    finalResult = finalResult + res[i];
    console.log(res[i]);
    console.log(finalResult);
  }

  return res.reverse().join().replace(/,/g, "");
}

function multiply(x, res, res_size) {
  let carry = 0; // Initialize carry

  // One by one multiply n with individual digits of res[]
  for (let i = 0; i < res_size; i++) {
    let prod = res[i] * x + carry;

    // Store last digit of 'prod' in res[]
    res[i] = prod % 10;

    // Put rest in carry
    carry = Math.floor(prod / 10);
  }

  // Put carry in res and increase result size
  while (carry) {
    res[res_size] = carry % 10;
    carry = Math.floor(carry / 10);
    res_size++;
  }
  return res_size;
}

// explanation: https://www.geeksforgeeks.org/factorial-large-number/
