function maxSubarraySum(arr, num){
    if(arr.length < num) {
        return null;
    }
    let result = 0; 
    for(let i = 0; i < num; i++) {
        result += arr[i];
    }
    let total = result;
    for(let j = num; j < arr.length; j++) {
        total += arr[j] - arr[j - num];
        result = Math.max(result, total);
    }
    return result;
}