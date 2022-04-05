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

function largestAltitude(gain: number[]): number {
   const results = gain.reduce(
      (acc, curr, idx) => {
         const current = idx === 0 ? 0 : curr
         return [
            ...acc,
            idx !== gain.length - 1 ? current + gain[idx + 1] : curr,
         ]
      },
      [0]
   )
   console.log(results)
   return Math.max(...results)
}

console.log(largestAltitude([-5, 1, 5, 0, -7]))
