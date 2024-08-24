// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target) {
    const numMap = {}

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i]
        if (difference in numMap) {
            return [numMap[difference], i]
        }
        numMap[nums[i]] = i
    }
}


function twoSum2(nums, target) {
    const numMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (numMap.has(diff)) {
            return [numMap.get(diff), i]
        }
        numMap.set(nums[i], i)
    }
}
console.log(twoSum2([2, 7, 11, 15], 9))  