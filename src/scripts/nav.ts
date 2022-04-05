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

function diagonalSum(mat: number[][]): number {
   const axis = []
   let k = 0
   let j = mat.length - 1
   for (let i = 0; i < mat.length; i++) {
      const curr = mat[i]
      axis.push(curr[k], curr[j])
      k++
      j--
   }
   if (mat[0].length % 2 !== 0) axis.splice(axis.length / 2, 1)
   console.log(axis)
   return axis.reduce((acc, curr) => acc + curr, 0)
}

console.log(
   diagonalSum([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
   ])
)
