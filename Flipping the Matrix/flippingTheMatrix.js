function flippingMatrix(matrix) {
    //the only matrix values that will be checked will  always have the positions in the upper left quadrant 
    let n = matrix.length / 2;
    let sum = 0;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            //we initialize the max variable to have the value of the matrix[0][0] for the first iteration.
            //In case of a 4x4 matrix this will then be: matrix[0][1], matrix[1][0], matrix[1][1] ---because n = 2
            let max = matrix[i][j];
            //we reverse the matrix´s row
            matrix[i].reverse();
            //we check if the new value in the position [i][j] is greater than the previous value, if yes we update the max variable
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            } 
            // we flip the whole matrix, the last row will become the first row
            matrix.reverse();
            //we check if the new values in the position [i][j] is greater than the previous one
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
            //finally we reverse the matrix´s row and check if the new values in the position [i][j] are greater than the previous ones
            matrix[i].reverse();
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
            // we add the max varibale to the sum variable
            sum += max;
        }

    }

    return sum;
}


// Every point in the matrix has only a set of possible positions that it can move to.
// For instance (0,0) zero indexed (row,column) has, on the example 4x4 grid given only 4 possible positions that it can occupy
// (0,0)<->(0,4)<->(4,0)<->(4,4) the same occurs for every point in the grid what that essentially means is that nomatter how you try to inverse any column or row,
// a given point will move independent of the others (restricted to its given set of possible positions) .
// So because we are trying to find the maximum total value of the submatrix we are trying to find the the maximum of every point of the wanted submatrix.
// i.e max((0,0)<->(0,4)<->(4,0)<->(0,4)) and the same priciple is repeated for every other wanted position and finaly they are all summed up.
// *Explanation by nikogarro on Hackerrank 