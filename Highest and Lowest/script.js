function highAndLow(numbers) {
  let arr = numbers.split(" ");
  arr.map((x) => Number(x));
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return `${max} ${min}`;
}
