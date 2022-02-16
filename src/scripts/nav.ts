const hamburger = document.getElementById(
   'hamburger-toggle'
) as HTMLButtonElement
const navMb = document.querySelector('.nav--pm') as HTMLElement

hamburger.addEventListener('click', () => {
   const status = navMb.getAttribute('data-visible')
   navMb.setAttribute('data-visible', status === 'true' ? 'false' : 'true')
   console.log(status)
})

// OOP Style
// Understand problem (repeat it with diff words)
// devise a plan - take lager issue + break down into smaller
// what do I currently know
// execute plan - from outline of plan via comments
// review solution - better approach?, can go back if run into issue

// Given a zero-based permutation nums (0-indexed),
// build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it
// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1
// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//  = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//  = [0,1,2,4,5,3]

function buildArray(nums: number[]): number[] {
   if (nums.length === 0) return []

   return nums.map((num) => nums[num])
}

console.log(buildArray([5, 0, 1, 2, 3, 4]))
