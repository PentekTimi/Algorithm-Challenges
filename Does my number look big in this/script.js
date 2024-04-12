function narcissistic(value) {
  value = value.toString();
  let power = value.length;
  let result = 0;

  for (let i = 0; i < power; i++) {
    result += Number(value[i]) ** power;
  }

  return result == value ? true : false;
}
