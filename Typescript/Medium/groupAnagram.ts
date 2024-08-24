// https://leetcode.com/problems/group-anagrams/description/

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

export default function groupAnagram(strs: string[]): string[][] {
    const strMap: { [key: string]: string[] } = {}
    for (let el of strs) {
        const key: string = el.split('').sort().join('')
        if (!strMap[key]) {
            strMap[key] = [el]
        } else {
            strMap[key].push(el)
        }
    }
    return Object.values(strMap)
}

function groupAnagram2(strs: string[]): string[][] {
    const strMap: Map<string, string[]> = new Map()
    for (let el of strs) {
        const key: string = el.split('').sort().join('')
        if (!strMap.has(key)) {
            strMap.set(key, [el])
        } else {
            strMap.get(key)?.push(el)
        }
    }
    return Array.from(strMap.values())
}

console.log(groupAnagram2(["eat", "tea", "tan", "ate", "nat", "bat"]))