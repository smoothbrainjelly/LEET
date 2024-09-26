//   https://leetcode.com/problems/min-stack/description/

var MinStack = function() {
    this.stack = [];
    this.minimum = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.minimum.push(this.minimum.length == 0 | val < this.minimum[this.minimum.length - 1] ? val : this.minimum[this.minimum.length - 1]);
        this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minimum.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   return this.minimum[this.stack.length - 1]; 
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */