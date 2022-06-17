
var MyQueue = function() {
  this.values = new MyStack();
  this.stackForReverse = new MyStack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.values.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  popAndPushToAnotherStack(this.values, this.stackForReverse);
  
  const poped = this.stackForReverse.pop();
  popAndPushToAnotherStack(this.stackForReverse, this.values);
  
  return poped;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  popAndPushToAnotherStack(this.values, this.stackForReverse);
  
  const peeked = this.stackForReverse.peek();
  popAndPushToAnotherStack(this.stackForReverse, this.values);
  
  return peeked;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.values.size() === 0;
};

function popAndPushToAnotherStack(stack1, stack2) {
  while(stack1.size()) {
    stack2.push(stack1.pop());
  }
}


/*===================== 스택 구현체 ======================*/

function MyStack() {
  const stack = Symbol('stack');
  this[stack] = [];

  /**
   * 스택에 1개 이상의 숫자를 추가합니다
   * @param {...number} numbers
   * @return {void}
  */
  this.push = function(...numbers) {
    this[stack].push(...numbers);
  };

  /**
   * 스택 맨 위에 있는 값을 꺼내옵니다
   * @return {number | undefined}
  */
  this.pop = function() {
    return this[stack].pop();
  };

  /**
   * pop 하면 나올 값을 읽어옵니다. 꺼내진 않습니다
   * @return {number | undefined}
  */
  this.peek = function() {
    return this[stack][this.size()-1];
  };

  /**
   * 스택에 들어있는 요소의 갯수를 가져옵니다
   * @return {number}
  */
  this.size = function() {
    return this[stack].length;
  };
  
  /**
   * 스택의 현재 상태를 출력합니다
   * @return {void}
  */
  this.logging = function() {
    console.log(`⇆ [${[...this[stack]].reverse().join(', ')}]`);
  }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
