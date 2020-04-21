var permuteUnique = function(nums) {
    let result = [];
    
    const findPerm = (current, leftover) => {
        current = current || [];
        
        if(!leftover.length) {
            result.push(current);
        }
        
        for(let i = 0; i < leftover.length; i++) {
            findPerm(current.concat(leftover[i]), leftover.slice(0, i).concat(leftover.slice(i + 1)))
        }
    }
    
    findPerm([], nums)
    result = [...new Set(result)]  
    return result;
};

//Failed. Not filtering duplicate. The Set does not work due to arrays cannot be compared directly. 