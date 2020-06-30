var maxSubArrayLen = function(nums, k) {
    let map = {0: -1};
    let result = 0;
    
    for(let i = 0, sum = 0; i < nums.length; i++) {
        sum += nums[i];
        
        if(map[sum - k]) {
            result = Math.max(result , i- map[sum - k])
        }
        
        if(!map[sum]) {
            map[sum] = i
        }
    }
    
    return result;
};

//[-2,-1,2,1], 1
//Output 1
//Expected 2