var searchMatrix = function(matrix, target) {
    if(!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    let row = 0; 
    let col = matrix[0].length - 1;
    while(row < matrix.length && col >= 0) {
        console.log(row, col)
        if(target === matrix[row][col]) {
            return true;
        } else if(target < matrix[row][col]) {
            col--;
        } else{
            row++;
        }
    }
    return false;
    
};

//Runtime: 76 ms, faster than 89.05% of JavaScript online submissions for Search a 2D Matrix II.
//Memory Usage: 37.4 MB, less than 55.56% of JavaScript online submissions for Search a 2D Matrix II.