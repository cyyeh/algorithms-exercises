/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  const _nums = Array.from(nums)
  let lastCompareIdx = _nums.length - 1

  for (let i = lastCompareIdx; i >= 0; i--) {
    let lastNum = _nums[0]
    for (let j = 1; j < lastCompareIdx + 1; j++) {
      if (lastNum > _nums[j]) {
        const swap = _nums[j]
        _nums[j] = _nums[j - 1]
        _nums[j - 1] = swap
      }
      lastNum = _nums[j]
    }
    lastCompareIdx -= 1
  }

  return _nums
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
