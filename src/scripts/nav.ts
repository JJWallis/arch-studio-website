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
// what do I currently know
// review solution - better approach?, can go back if run into issue

function maxDepth(s: string): number {
   const strArr = s.split('')
   console.log(strArr)

   strArr.map((valOuter, idxOuter) =>
      strArr.map((valuInner, idxInner) => {
         if (idxOuter !== idxInner) {
         }
      })
   )
   return 0
}

console.log(maxDepth('(1+(2*3)+((8)/4))+1')) // 3
