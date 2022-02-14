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
// Understand problem (repeat it with diff words)
// devise a plan - take lager issue + break down into smaller
// execute plan - from outline of plan via comments
// review solution - better approach?, can go back if run into issue

function transposeMatrix(input: number[][]) {
   return input.map((_, idx) => input.map((row) => row[idx]))
}

console.log(
   transposeMatrix([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
   ])
)
