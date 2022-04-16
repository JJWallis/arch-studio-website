const hamburger = document.getElementById(
   'hamburger-toggle'
) as HTMLButtonElement
const navMb = document.querySelector('.nav--pm') as HTMLElement

hamburger.addEventListener('click', () => {
   const status = navMb.getAttribute('data-visible')
   navMb.setAttribute('data-visible', status === 'true' ? 'false' : 'true')
   console.log(status)
})

// easy to `understand` vs `maintainable` code vs shortest method
// Understand problem (repeat it with diff words) - Asking `clarifying` questions (unclear requirements + edge cases)
// devise a plan - take lager issue + break down into smaller
// execute plan - from outline of plan via comments
// what do I currently know
// review solution - better approach? + `refactor` for readability, extensibility, re-usability, and performance

function findFinalValue(nums: number[], original: number): number {
   let result = original

   for (let i = 0; i < nums.length; i++) {
      const numFound = nums.find((num) => num === result)
      if (!numFound) return result
      result = numFound * 2
   }

   return result
}

console.log(findFinalValue([5, 3, 6, 1, 12], 3))
