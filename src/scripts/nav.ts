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
// execute plan - from outline of plan via comments
// what do I currently know
// review solution - better approach?, can go back if run into issue

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i]
// Return the answer in an array

function smallerNumbersThanCurrent(nums: number[]): number[] {
   return []
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
