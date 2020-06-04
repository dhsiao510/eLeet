function naiveStringSearch(str, tar) {
    var counter = 0;
    for(var i = 0; i < str.length; i++) {
        for(var j =  0; j < tar.length; j++) {
            if(tar[j] !== str[i + j]){
                break;
            }
            if(j === tar.length - 1) {
                counter++;
            }
        }
    }
    return counter;
}