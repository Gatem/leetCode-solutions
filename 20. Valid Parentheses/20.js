/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
*/
function isValid(s) {
  const left = [];
  const specCharts = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (const char of s) {
    if (char in specCharts) {
      left.push(char);
    } else if (specCharts[left.pop()] !== char) {
      return false;
    }
  }
  return !left.length;
}
