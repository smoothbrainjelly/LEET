/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};


/**
 * Alright I think this solution is very interesting. Using recursion we can simplify the problem down to the comparison of the first two nodes.
 * When we recurse we are simply considering the same problem but with a smaller set of nodes, all the way down to the last pair.
 * 
 * With lists 1-3-5 and 2-4-6
 * we compare 1 and 2, 1 is less than 2 so the pointer from 1-node is determined by the result of the sub-problem (3-5 and 2-4-6)
 * we compare 3 and 2, 2 is less than 3 so the pointer from 2-node is determined by the result of the sub-problem (3-5 and 4-6)
 * we compare 3 and 4, 3 is less than 3 so the pointer from 3-node is determined by the result of the sub-problem (5 and 4-6)
 * we compare 5 and 4, 4 is less than 5 so the pointer from 4-node is determined by the result of the sub-problem (5 and 6)
 * we compare 5 and 6, 5 is less than 6 so the pointer from 5-node is determined by the result of the sub-problem ([] and 6)
 * list 1 is now null which triggers base case 1 and returns list 2: 6 
*/