function persistence(num) {
  let count = 0;

  while (num.toString().length > 1) {
    const digits = num.toString().split("").map(Number);
    num = digits.reduce((a, b) => a * b);
    count++;
  }
  return count;
}

//or

const persistence = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
    : 0;
};
