// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

export default function validParentheses(s: string) {
    if (s.length % 2 !== 0) return false
    const stack: string[] = []
    const closeToOpen: { [key: string]: string } = { ')': '(', ']': '[', '}': '{' }
    for (let char of s) {
        if (char in closeToOpen) {
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[char]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(char)
        }
    }
    return stack.length === 0
}

console.log(validParentheses("()[]{}"))