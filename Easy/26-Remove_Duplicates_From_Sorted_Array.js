/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    if (nums.length == 0) { return 0; }

    var k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] != nums[i]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k
};