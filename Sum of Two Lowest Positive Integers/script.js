function sumTwoSmallestNumbers(numbers) {  
    let num1 = Number.MAX_VALUE
    let num2 = Number.MAX_VALUE
    let index;
    
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < num1) {
        num1 = numbers[i]
        index = i
      }
    }
    
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < num2 && index != i) {
        num2 = numbers[i]
      }
    }
    
    return num1 + num2
  }