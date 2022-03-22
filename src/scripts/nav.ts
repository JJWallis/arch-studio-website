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

// Given an integer n, return any array containing n unique integers such that they add up to 0.

function sumZero(n: number): number[] {
   let res = []
   if (n % 2 !== 0) res.push(0)
   for (let c = Math.floor(n / 2); c > 0; c--) {
      res.push(-c - 1)
      res.unshift(c + 1)
   }
   return res
}

console.log(sumZero(6))
