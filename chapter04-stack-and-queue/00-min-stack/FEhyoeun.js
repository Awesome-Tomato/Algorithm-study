var MinStack = function() {
  this.stack = []
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let len = this.stack.length
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  let last = this.stack.at(-1)
  return last
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let minValue = Math.min(...this.stack)
  return minValue
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let obj = new MinStack()
obj.push(-2);
obj.push(0);
obj.push(-3);
obj.getMin(); // return -3
obj.pop();
obj.top();    // return 0
obj.getMin(); // return -2