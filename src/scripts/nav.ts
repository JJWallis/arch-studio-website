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
// wwwiiuu = 3w2i2u | 3w2i2u = wwwiiuu

function decode(input: string) {
   // return input.replace(/(\d+)(\w)/g, (match) =>
   //    match[1].repeat(Number(match[0]))
   // )
   return input.replace(/(\d+)(\w)/g, (x, y, z) => {
      console.log(x, y, z)
      return null
   })
}

console.log(decode('32w2i2u'))
