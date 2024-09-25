/**
 * https://leetcode.com/problems/remove-element/
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    if (nums.length == 0) {return 0;}

    var k = 0, i;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}