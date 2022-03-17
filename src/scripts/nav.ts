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

// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
// A subarray is a contiguous subsequence of the array.
// Return the sum of all odd-length subarrays of arr.

const sumOddLengthSubarrays = (arr) => {
   let n = arr.length
   let sum = 0

   let k = 1
   while (n >= k) {
      for (let i = 0; i < n - k + 1; i++) {
         const currentSubArray = arr.slice(i, i + k)
         sum += currentSubArray.reduce((a, b) => a + b, 0)
      }
      k += 2
   }
   return sum
}

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])) // 58
