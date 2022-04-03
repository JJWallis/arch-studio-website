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

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in
// Additionally, if the number is negative, return 0 (for languages that do have them)
// Note: If the number is a multiple of both 3 and 5, only count it once

function solution(num: number) {
   if (num < 0) return 0
   let total = 0
   for (let i = 1; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) total += i
   }
   return total
}

console.log(solution(10)) // 23
