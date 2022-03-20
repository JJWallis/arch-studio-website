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
// easy to `understand` vs `maintainable` code vs shortest method
// Understand problem (repeat it with diff words) - Asking `clarifying` questions (unclear requirements + edge cases)
// devise a plan - take lager issue + break down into smaller
// execute plan - from outline of plan via comments
// what do I currently know
// review solution - better approach? + `refactor` for readability, extensibility, re-usability, and performance

// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums
// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers

function findGCD(nums: number[]): number {
   const max = Math.max(...nums)
   const min = Math.min(...nums)
   const results = []
   if (max % 2 !== 0 || min % 2 !== 0) return max === min ? max : 1
   for (let i = 2; i < max; i++)
      max % i === 0 && min % i === 0 ? results.push(i) : null
   return Math.max(...results)
}

console.log(findGCD([3, 3])) // 2
