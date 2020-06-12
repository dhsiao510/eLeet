function collectStrings(obj) {
    let result = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            result.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
            result = result.concat(collectStrings(obj[key]));
        }
    }
    return result;
}