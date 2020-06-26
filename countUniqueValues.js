function countUniqueValues(arr){
    if(arr.length === 0) {
        return 0;
    }
    let result = 1;
    let start = 0;
    let pointer = 1;
    while(pointer < arr.length) {
        if(arr[start] !== arr[pointer]) {
            result++;
            start = pointer;
            pointer++;
        } else{
            pointer++; 
        }
    }
    return result;
}