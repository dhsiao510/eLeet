function nestedEvenSum (obj, result = 0) {
    for(var key in obj) {
        if(typeof obj[key] === 'object') {
            result =+ nestedEvenSum(obj[key], result);
        } else if(typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            result += obj[key];
        }
    }
    return result;
}