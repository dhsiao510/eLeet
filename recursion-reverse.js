function reverse(str){
    if(str.length <= 1) {
        return str;
    }
    return reverse(str.slice(1)) + str[0];
}

//.slice() with one param, returns a new string from the param index and everything after
