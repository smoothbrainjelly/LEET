class Solution {
    /**
     * https://leetcode.com/problems/valid-parentheses/description/
     * 
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if ( ['}',')',']'].includes(s[0]) ) { return false; }

        var stack = [];
        for (let i = 0; i < s.length; i++) {
            switch (s[i]) {
                case '{':
                case '[':
                case '(':
                    stack.push(s[i]);
                    break;
                case '}':
                    if (stack.pop() != '{') { return false; }
                    break;
                case ']':
                    if (stack.pop() != '[') { return false; }
                    break;
                case ')':
                    if (stack.pop() != '(') { return false; }
                    break;
                default:
            }
        }

        return stack.length == 0;
    }
}
