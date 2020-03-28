var dailyTemperatures = function(T) {
    let result = [];
    for(let i = 0; i < T.length - 1; i++) {
        let counter = 1;
        for(let j = i + 1; j <= T.length; j++) {
            if(T[j] > T[i]) {
                result.push(counter);
                break;
            } else if(j === T.length - 1) {
                result.push(0);
            } else {
                counter++;
            }
        }
    }
    result.push(0);
    return result;
};

//Runtime: 2408 ms, faster than 5.17% of JavaScript online submissions for Daily Temperatures.
//Memory Usage: 42.7 MB, less than 44.44% of JavaScript online submissions for Daily Temperatures.