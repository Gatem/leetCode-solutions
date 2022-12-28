/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
 */

var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; ++i) {
    if (map[target - nums[i]] !== undefined) {
      return [i, map[target - nums[i]]];
    } else {
      map[nums[i]] = i;
    }
  }
};
