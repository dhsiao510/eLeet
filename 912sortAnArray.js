var sortArray = function(nums) {
    const sortedIndex = ((arr, start = 0, end = arr.length - 1) => {
        const swap = ((array, idx1, idx2) => {
            let temp = array[idx1];
            array[idx1] = array[idx2];
            array[idx2] = temp;
        })
              
        let pivot = arr[start];
        let swapId = start;
        for(let i = start + 1; i <= end; i++) {
            if(pivot > arr[i]) {
                swapId++;
                swap(arr, swapId, i);
            }
        }
        swap(arr, start, swapId)
        return swapId;
    })
    
    const quickSort = ((arr, left = 0, right = arr.length - 1) => {
        if(left < right) {
            let pivotIndex = sortedIndex(arr, left, right);
            quickSort(arr, left, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, right);
        }
        return arr;
    })
    
    return quickSort(nums);
}; 

//Runtime: 120 ms, faster than 49.61% of JavaScript online submissions for Sort an Array.
//Memory Usage: 40 MB, less than 100.00% of JavaScript online submissions for Sort an Array.