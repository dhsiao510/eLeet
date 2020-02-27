var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while(i != j) {
        if((numbers[i] + numbers[j]) === target) {
            return [i + 1, j + 1];
        } else if ((numbers[i] + numbers[j]) > target) {
            j--;
        } else {
            i++
        }
    }
};

//Runtime: 56 ms, faster than 77.68% of JavaScript online submissions for Two Sum II - Input array is sorted.
//Memory Usage: 35.1 MB, less than 82.61% of JavaScript online submissions for Two Sum II - Input array is sorted.