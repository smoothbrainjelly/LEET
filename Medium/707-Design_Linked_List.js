//     https://leetcode.com/problems/design-linked-list/description/


var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

class ListNode {
    constructor(value, prev=null, next=null) {
        this.val = value;
        this.prev = prev;
        this.next = next;
    }
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || this.length-1 < index) return -1;

    let count = 0, curr = this.head;
    while (count < index) {
        curr = curr.next;
        count++;
    }

    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    newNode = new ListNode(val);
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    newNode = new ListNode(val, this.tail);
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let count = 1, curr = this.head;
    if (index === 0 ) { this.addAtHead(val); }
    else if (index < this.length) {
        while (count < index) {
            curr = curr.next;
            count++;
        }
        newNode = new ListNode(val, curr, curr.next)
        curr.next.prev = newNode;
        curr.next = newNode;
        this.length++;
    } else if (index === this.length) {
        this.addAtTail(val);
    } else {
        return;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || this.length-1 < index) return; 

    if (index === 0) {
        this.head = this.head.next;
        if (this.head) { this.head.prev = null; }
    } else if (index === this.length-1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
    } else {
        let count=0, curr=this.head;
        while (count < index) {
            curr = curr.next;
            count++;
        }
        if (index != this.length-1) { curr.next.prev = curr.prev; }    
        if (index > 0 ) { curr.prev.next = curr.next; }
    }
    this.length--;
};

MyLinkedList.prototype.print = function() {
    var curr = this.head, output = '';
    while (curr) {
        output += curr ? curr.val : '';
        curr = curr.next;
    }
    console.log(output, this.length);
}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */