var matrixReshape = function(nums, r, c) {
    let fullLength = 0;
    let combined = []
    for(let i = 0; i < nums.length; i++) {
        fullLength += nums[i].length;
        for(let j = 0; j < nums[i].length; j++) {
            combined.push(nums[i][j]);
        }
    }
    
    if( fullLength !== r * c) {
        return nums;
    }     
    
    let result = [];
    
    while(r > 0) {
        let row = [];
        for(let i = 0; i < c; i++ ) {
            row.push(combined.shift())
        }
        result.push(row);
        r--;
    }
    
    return result
};

//Runtime: 76 ms, faster than 90.64% of JavaScript online submissions for Reshape the Matrix.
//Memory Usage: 41.1 MB, less than 40.00% of JavaScript online submissions for Reshape the Matrix.