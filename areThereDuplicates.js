function areThereDuplicates() {
    let obj = {};
    for(var key in arguments) {
        if(!obj[arguments[key]]) {
            obj[arguments[key]] = 1;
        } else {
            return true;
        }
    }
    return false;
}