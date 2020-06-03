function binarySearch(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor(end / 2);
    while(arr[mid] !== target && start <= end) {
        if(target > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2)
    }
    return arr[mid] === target? mid : -1;
}