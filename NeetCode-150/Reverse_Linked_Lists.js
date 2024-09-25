/**
 * 
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        var last = null, curr = head, next;
        while (curr) {
            next = curr.next; // grab the next node for looping
            curr.next = last; // set the pointer to the new node
            last = curr; // update this reference for next loop
            curr = next; // set up for looping
        }

        return last;
    }
}
