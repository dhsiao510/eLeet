const quickSort = ((nums) => {
    const sortedIndex = ((arr, start = 0, end = arr.length - 1) => {
        const swap = (arr, index1, index2) => {
            let temp = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = temp;
        }

        let pivot = arr[start];
        let swapId = start;
        for(let i = start + 1; i <= end; i++) {
            if(arr[i] < pivot) {
                swapId++;
                swap(arr, swapId, i);
            }
        }

        swap(arr, start, swapId);
        return swapId;
    })

    const sort = ((arr, left = 0, right = arr.length - 1) => {
        if(left < right) {
            let pivotIndex = sortedIndex(arr, left, right);
            sort(arr,left, pivotIndex - 1);
            sort(arr, pivotIndex + 1, right);
        }
        return arr;
    })
    
    return sort(nums);
})