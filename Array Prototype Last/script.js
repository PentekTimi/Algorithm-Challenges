Array.prototype.last = function () {
  if (this.length == 0) return -1;
  return this.pop();
};

/*
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

//or

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};
