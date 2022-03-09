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
   const results = strArr
      .map((_, idxOuter) => {
         let leftTotal = 0
         let rightTotal = 0
         return strArr
            .map((valInner, idxInner) => {
               valInner === '('
                  ? leftTotal++
                  : valInner === ')'
                  ? rightTotal++
                  : null
               if (idxOuter === idxInner) return leftTotal - rightTotal
            })
            .filter((val) => val !== undefined)
      })
      .flat(1)
   return Math.max(...results)
}

console.log(maxDepth('(1+(2*3)+((8)/4))+1')) // 3
