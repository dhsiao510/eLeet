var NumArray = function(nums) {
    this.arr = nums;
};

NumArray.prototype.sumRange = function(i, j) {
    let sum = 0;
    let arr = this.arr;
    while(i < j + 1) {
        sum += arr[i];
        i++;
    }
    return sum;
};

//Runtime: 156 ms, faster than 26.56% of JavaScript online submissions for Range Sum Query - Immutable.
//Memory Usage: 43.8 MB, less than 100.00% of JavaScript online submissions for Range Sum Query - Immutable.
