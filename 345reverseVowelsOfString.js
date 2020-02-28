var reverseVowels = function(s) {
    const v = ['a', 'e', 'i', 'o', 'u']
    let arr = s.split('');
    let i = 0;
    let j = s.length - 1;
    while(i <= j) {
        if((v.indexOf(arr[i]) > 0) && (v.indexOf(arr[j]) > 0)) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        } else if((v.indexOf(arr[i]) < 0) && (v.indexOf(arr[j]) > 0)){
            i++;
        } else {
            j--;
        }
    } 
    return arr.join('');
}