/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.array = [];
    this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.array.push(x);
    if(this.min.length === 0) {
        this.min.push(x);
        return ;
    }
    
    if(x < this.min[this.min.length - 1]){
        this.min.push(x);
    } else {
        for(var i = this.min.length - 1; i > -1; i--) {
            if(x <= this.min[i]) {
                this.min.splice(i, 0, x);
                break;
            }
            this.min.unshift(x);
        }
    } 
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
        this.min.splice(this.min.indexOf(this.array[this.array.length - 1]), 1);
        this.array.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.array.length > 0) {
        return this.array[this.array.length - 1];
    }
    return false;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
        return this.min[this.min.length - 1];
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 //16 / 18 test cases passed.
//Status: Time Limit Exceeded
