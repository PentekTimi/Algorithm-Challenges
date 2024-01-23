function digPow(n, p) {
    let arrOfNum = String(n).split("").map(Number)
    let numResult = 0;

    for(let i = 0; i < arrOfNum.length; i++) {
      numResult += Math.pow(arrOfNum[i], p)
      p++
    }
    
    if (numResult < n) return -1
    if (numResult % n === 0) {
      return numResult / n
    } else {
      return -1
    }
  }