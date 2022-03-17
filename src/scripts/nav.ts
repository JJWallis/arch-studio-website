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

function sumOddLengthSubarrays(arr: number[]) {
   const total = arr.reduce((acc, curr) => acc + curr, 0)
   const results: number[][] = []
   let curr: number[] = []
   if (arr.length <= 2) return total
   for (let i = 0; i < arr.length; i++) {
      curr.push(arr[i])
      if (i > 0 && curr.length % 2 !== 0) {
         results.push(curr)
         curr = []
      }
   }
   return results
}

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])) // 58
