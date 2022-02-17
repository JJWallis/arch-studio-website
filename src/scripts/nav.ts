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

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i])
// Return the running sum of nums
// nput: nums = [1,2,3,4]
// Output: [1,3,6,10]

function runningSum(nums: number[]) {
   return nums.reduce((acc, curr) => null, [])
}

console.log(runningSum([1, 2, 3, 4]))
