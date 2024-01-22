function nthChar(words){
    let result = ""
    words.forEach((word, index) => {
      result = result + word.charAt(index)
    })
   return result
  }