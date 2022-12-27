//How Many Numbers Are Smaller Than the Current Number

/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.

-----------------
Ex:
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]

*/

const nums = [8, 1, 2, 2, 3];

// Fast Runtime Solution

var smallerNumbersThanCurrent = function (nums) {
  const numbers = {};
  const result = [];
  nums.forEach((n) => {
    if (numbers[n] === undefined) {
      numbers[n] = 0;
      nums.forEach((number) => {
        n > number ? (numbers[n] = numbers[n] + 1) : '';
      });
      result.push(numbers[n]);
    } else {
      result.push(numbers[n]);
    }
  });
  return result;
};

// Clean Solution

var smallerNumbersThanCurrent = function (nums) {
  const numbers = {},
    result = [];
  nums.forEach((n) => {
    let currentNum = numbers[n];
    if (currentNum === undefined) {
      currentNum = 0;
      nums.forEach((number) => {
        n > number ? (currentNum = currentNum + 1) : '';
      });
      result.push(currentNum);
    } else {
      result.push(currentNum);
    }
  });
  return result;
};
