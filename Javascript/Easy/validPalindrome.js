// https://leetcode.com/problems/valid-palindrome/description/

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

function palindrome(str) {
    const cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
    const revStr = cleanStr.split('').reverse().join('')
    return cleanStr === revStr
}

function palindromePointer(str) {
    const cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
    let l = 0
    let r = cleanStr.length - 1
    while (l <= r) {
        if (cleanStr[l] === cleanStr[r]) {
            l++
            r--
        } else {
            return false
        }
    }
    return true
}

console.log(palindromePointer("A man, a plan, a canal: Panama"))