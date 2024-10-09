class ListNode {
    constructor (value, index, prev=null, next=null) {
        this.val = value;
        this.index = index;
        this.prev = prev;
        this.next = next;
    }
}
/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    var homeNode = new ListNode(homepage, 0)
    this.head = homeNode;
    this.tail = homeNode;
    this.curr = homeNode;
    this.size = 1;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    var node = new ListNode(url, this.curr.index + 1, this.curr);
    this.curr.next = node;
    this.tail = node;
    this.curr = node;
    this.size = this.curr.index + 1;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    if (this.curr.index - steps <= 0) { 
        this.curr = this.head;
        return this.curr.val; 
    } else {
        for (steps; steps > 0; steps--) {
            this.curr = this.curr.prev;
        }
        return this.curr.val;
    }
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    if (steps + this.curr.index >= this.size) {
        this.curr = this.tail; 
        return this.curr.val; 
    } else {
        for (steps; steps > 0; steps--) {
            this.curr = this.curr.next;
        }
        return this.curr.val;
    }
};

BrowserHistory.prototype.print = function() {
    var cursor = this.head;
    while (cursor) {
        console.log(cursor.val, cursor.index);
        cursor = cursor.next;
    }
    console.log('------')
}

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */