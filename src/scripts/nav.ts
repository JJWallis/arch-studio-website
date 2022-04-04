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

function maxProductDifference(nums: number[]): number {
   const sorted = nums.sort()
   const results: number[] = []
   let j = sorted.length - 1
   for (let i = 0; i < 2; i++) {
      results.unshift(sorted[i])
      results.push(sorted[j])
      j--
   }
   console.log(results)
   return 0
}

console.log(maxProductDifference([5, 6, 2, 7, 4]))
