// https://leetcode.com/problems/valid-anagram/description/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

function anagram(s, t) {
    const sortedS = s.trim().split('').sort().join('')
    const sortedT = t.trim().split('').sort().join('')
    return sortedS === sortedT
}


var isAnagram = function (s, t) {
    return s.trim().split('').sort().join('') === t.trim().split('').sort().join('')
};

console.log(anagram('anagram', 'nagaram'))