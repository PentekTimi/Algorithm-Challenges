function solution(str){
    if (str.length < 1) return []
    
    let result = str.match(/.{1,2}/g)
    let lastItem = result.pop()
    
    if (lastItem.length < 2){
      lastItem += "_"
      result.push(lastItem)
    } else {
      result.push(lastItem)
    }
    return result
}

// OR

function solution(str){
    if (str.length < 1) return []
      
    let result = str.match(/.{1,2}/g)
    let lastItem = result[result.length - 1]
   
    if (lastItem.length < 2){
      result[result.length - 1] = lastItem + "_"
    }
    return result
}


//OR

function solution(str){
    if (str.length < 1) return []
    
    if(str.length % 2 !== 0) {
        str = str + "_"
    }
      
    let result = str.match(/.{2}/g)
   
    return result
}