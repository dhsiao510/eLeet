var MyQueue = function() {
    this.array = [];
};

MyQueue.prototype.push = function(x) {
    this.array.push(x);
};

MyQueue.prototype.pop = function() {
    if(this.array.length > 0) {
        return this.array.shift();
    }
    return false;
};

MyQueue.prototype.peek = function() {
    if(this.array.length > 0) {
        return this.array[0];
    }
};

MyQueue.prototype.empty = function() {
    return this.array.length === 0;
};

//Runtime: 60 ms, faster than 13.75% of JavaScript online submissions for Implement Queue using Stacks.
//Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Implement Queue using Stacks.