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
   let total = 0
   let j = sorted.length - 1
   for (let i = 0; i < 1; i++)
      total = sorted[i] * sorted[i + 1] - sorted[j] * sorted[j - 1]
   console.log(total)
   return total
}

console.log(maxProductDifference([5, 6, 2, 7, 4]))
