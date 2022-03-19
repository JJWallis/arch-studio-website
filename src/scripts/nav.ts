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

function maximum69Number(num: number): number {
   const inputArr = String(num).split('')
   console.log(inputArr)
   const results = inputArr.map((num, idx) => {
      const remaining = inputArr.slice(idx + 1, inputArr.length)
      return num === '6' ? '9' : '6'
   })
   console.log(results)
   return 0
}

console.log(maximum69Number(9669))
