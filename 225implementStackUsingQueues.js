var MyStack = function() {
    this.array = [];
};

MyStack.prototype.push = function(x) {
    this.array.push(x);
};

MyStack.prototype.pop = function() {
    if(this.array.length > 0) {
        return this.array.pop();
    };
    return false;
};

MyStack.prototype.top = function() {
    if(this.array.length > 0) {
        return this.array[this.array.length - 1];
    }
    return false;
};

MyStack.prototype.empty = function() {
    return this.array.length === 0;
};