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

function heightChecker(heights: number[]) {
   const heightsSorted = [...heights].sort()
   let totalDifferences = 0

   for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== heightsSorted[i]) totalDifferences++
   }

   return totalDifferences
}

console.log(heightChecker([1, 1, 4, 2, 1, 3]))
