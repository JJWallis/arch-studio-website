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

// Given two arrays of integers nums and index. Your task is to create target array under the following rules:
// Initially target array is empty
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array
// Repeat the previous step until there are no elements to read in nums and index
// Return the target array

function createTargetArray(nums: number[], index: number[]) {
   const target = []
   return target
}

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])) // [0,4,1,3,2]
