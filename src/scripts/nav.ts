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

function minimumSum(num: number): number {
   const split = String(num).split('').sort()
   const secondLowest = split[1]
   split[1] = split[2]
   split[2] = secondLowest
   const firstNum = Number(split.slice(0, split.length / 2).join(''))
   const secondNum = Number(split.slice(split.length / 2).join(''))
   return firstNum + secondNum
}

console.log(minimumSum(2932))
