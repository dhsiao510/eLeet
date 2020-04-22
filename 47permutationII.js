var permuteUnique = function(nums) {
    let results = [];
    
    const permu = (current, leftover) => {
        current = current || '';

        if(!leftover.length) {
            results.push(current);
        } 

        for(let i = 0; i < leftover.length; i++) {
            permu('' + current + leftover[i], leftover.slice(0, i).concat(leftover.slice(i + 1)))
        } 
    }
    permu('', nums)
    results = [...new Set(results)].map((el) => el.split(''))

    return results;
};

//Filters duplicate, but does not pass with negative numbers. Need fix. 