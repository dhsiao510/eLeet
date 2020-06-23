function minSubArrayLen(arr, target) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let result = Infinity;
    
    while(left < arr.length) {
        if(sum < target && right < arr.length) {
            sum += arr[right];
            right++;
        } else if (sum >= target) {
            result = Math.min(result, right - left);
            sum -= arr[left];
            left++;
        } else{
            break;
        }
    }
    return result === Infinity? 0: result;
}