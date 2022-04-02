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

function countConsistentStrings(allowed: string, words: string[]): number {
   const desiredChars = allowed.split('')
   const results = []
   for (let i = 0; i < words.length; i++) {
      // continue statement 
      words[i].split('').every((char) => char)
   }
   return [].length
}

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])) // 2
