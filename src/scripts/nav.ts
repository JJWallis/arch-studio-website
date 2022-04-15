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

function kWeakestRows(mat: number[][], k: number): number[] {
   const totals = mat.map((row) => row.reduce((acc, num) => acc + num, 0))
   const results = []

   for (let i = 0; i < k; i++) {
      const nums = totals.filter((num) => typeof num === 'number')
      const min = Math.min(...nums)
      const minIdx = totals.indexOf(min)
      results.push(minIdx)
      totals.splice(minIdx, 1, null)
   }

   return results
}

console.log(
   kWeakestRows(
      [
         [1, 1, 0, 0, 0],
         [1, 1, 1, 1, 0],
         [1, 0, 0, 0, 0],
         [1, 1, 0, 0, 0],
         [1, 1, 1, 1, 1],
      ],
      3
   )
)
