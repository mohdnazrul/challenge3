// pages/index.js

import { useState } from 'react';

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      // 1-indexed array
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
};

const TwoSumPage = () => {
  // Example 1
  const [numbers, setNumbers] = useState([2, 7, 11, 15])
  const [target, setTarget] = useState(9);
  const result = twoSum(numbers, target);

  // Example 2
  const [numbers2, setNumbers2] = useState([2, 3, 4])
  const [target2, setTarget2] = useState(6);
  const result2 = twoSum(numbers2, target2);

  // Example 3
  const [numbers3, setNumbers3] = useState([-1, 0])
  const [target3, setTarget3] = useState(-1);
  const result3 = twoSum(numbers3, target3);


  return (
      <div>
        <h1>Two Sum II - Input Array Is Sorted</h1>
        <div>
          <p> Example 1: </p>
          <p>Input: numbers = [{numbers.join(', ')}], target = {target}</p>
          <p>Output: [{result.join(', ')}]</p>
          {result.length > 0 ? (
              <p>
                Explanation: The sum of {numbers[result[0] - 1]} and {numbers[result[1] - 1]} is {target}, therefore,
                index1 = {result[0]}, index2 = {result[1]}, We return [{result[0]}, {result[1]}]
              </p>
          ) : (
              <p>No solution found for the given target sum.</p>
          )}
        </div>
        <div>
          <p> Example 2: </p>
          <p>Input: numbers = [{numbers2.join(', ')}], target = {target2}</p>
          <p>Output: [{result2.join(', ')}]</p>
          {result2.length > 0 ? (
              <p>
                Explanation: The sum of {numbers2[result2[0] - 1]} and {numbers2[result2[1] - 1]} is {target2}, therefore,
                index1 = {result2[0]}, index2 = {result2[1]}, We return [{result2[0]}, {result2[1]}]
              </p>
          ) : (
              <p>No solution found for the given target sum.</p>
          )}
        </div>
        <div>
          <p> Example 3: </p>
          <p>Input: numbers = [{numbers3.join(', ')}], target3 = {target3}</p>
          <p>Output: [{result3.join(', ')}]</p>
          {result3.length > 0 ? (
              <p>
                Explanation: The sum of {numbers[result3[0] - 1]} and {numbers[result3[1] - 1]} is {target3}, therefore,
                index1 = {result3[0]}, index2 = {result3[1]}, We return [{result3[0]}, {result3[1]}]
              </p>
          ) : (
              <p>No solution found for the given target sum.</p>
          )}
        </div>
      </div>
  );
};

export default TwoSumPage;
