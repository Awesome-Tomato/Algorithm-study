
var MyStack = function() {
  this.queue = new MyQueue();
  this.queueForLastPeek = new MyQueue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  pushLastOne(this.queue, this.queueForLastPeek);
  
  return this.queueForLastPeek.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  pushLastOne(this.queue, this.queueForLastPeek);
  const peeked = this.queueForLastPeek.pop();
  this.queue.push(peeked);
  
  return peeked;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.size() === 0;
};
  
function pushLastOne(queue, target) {
  while(queue.size()) {
    target.push(queue.pop());
  }
  
  while(target.size() > 1) {
    queue.push(target.pop());
  }
}

/*================== 큐 구현체 ====================*/

function MyQueue() {
  const queue = Symbol('queue');
  this[queue] = [];
  
  /**
   * 큐에 요소를 추가합니다
   * @param {...number} numbers
   * @return void
  */
  this.push = function(...numbers) {
    this[queue].push(...numbers);
  }
  
  /**
   * 큐에서 제일 처음 들어온 값을 가져옵니다
   * @return {number | undefined}
  */
  this.pop = function() {
    return this[queue].shift();
  }
  
  /**
   * 큐에서 pop을 하면 나올 값을 보여줍니다. 꺼내오진 않습니다
   * @return {number | undefined}
  */
  this.peek = function() {
    return this[queue][0];
  }
  
  /**
   * 큐에 들어있는 요소의 개수 반환합니다
   * @return {number}
  */
  this.size = function() {
    return this[queue].length;
  }
  
  /**
   * 큐의 현재 상태를 출력합니다
   * @return {void}
  */
  this.logging = function() {
    console.log(`→ [${[...this[queue]].reverse().join(', ')}] →`);
  }
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
