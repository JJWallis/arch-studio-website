const hamburger = document.getElementById(
   'hamburger-toggle'
) as HTMLButtonElement
const navMb = document.querySelector('.nav--pm') as HTMLElement

hamburger.addEventListener('click', () => {
   const status = navMb.getAttribute('data-visible')
   navMb.setAttribute('data-visible', status === 'true' ? 'false' : 'true')
})

// easy to `understand` vs `maintainable` code vs shortest method
// Understand problem (repeat it with diff words) - Asking `clarifying` questions (unclear requirements + edge cases)
// devise a plan - take lager issue + break down into smaller
// execute plan - from outline of plan via comments
// what do I currently know
// review solution - better approach? + `refactor` for readability, extensibility, re-usability, and performance

function countWords(words1: string[], words2: string[]): number {
   const wordToMatch = words2.join(' ')
   let total = 0

   words1.forEach((word) => {
      const regex = new RegExp(word, 'gi')
      const matchLength = wordToMatch.match(regex).length
      if (matchLength === 1) total + 1
   })

   return total
}

console.log(
   countWords(
      ['leetcode', 'is', 'amazing', 'as', 'is'],
      ['amazing', 'leetcode', 'is']
   )
)
