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

function countNegatives(grid: number[][]): number {
   let total = 0
   for (let i = 0; i < grid.length; i++) {}

   return total
}

console.log(
   countNegatives([
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
   ])
)
