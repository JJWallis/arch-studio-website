function twoSum(nums: number[], target: number) {
   // can't use the same element twice
   // only 1 solution
   // return in any order
   return nums
      .map((numTop) =>
         nums.findIndex((num) => num !== numTop && num + numTop === target)
      )
      .filter((num) => num !== -1)
}

console.log(twoSum([2, 7, 11, 15], 13))
