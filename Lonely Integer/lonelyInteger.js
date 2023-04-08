function lonelyinteger(a) {
    for (let i = 0; i < a.length; i++) {
        //initialize a counter that will increment on integer pairs found. 
        //since we know all occur twice but one, the counter will be most times 2. If the code finished looping through the inner array and the counter is 1, it means we found the unique element, so we return it.
        let counter = 0;
        for (let j = 0; j < a.length; j++) {
            if (a[i] === a[j]) {
                counter = counter + 1
            }
        }
        if (counter === 1) {
            return a[i];
        }
    }
}