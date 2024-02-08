function add(n) {
  const adder = (x) => add(n + x);
  adder.valueOf = () => n;
  return adder;
}
