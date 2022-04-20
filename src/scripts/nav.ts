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
// pr test

function countWords(words1: string[], words2: string[]): number {
   const words1Str = words1.join(' ')
   const words2Str = words2.join(' ')
   let total = 0

   words1.forEach((word) => {
      const regex = new RegExp(word, 'gi')
      const word1Match = words1Str.match(regex)
      const word2Match = words2Str.match(regex)
      const totalLength = word1Match?.length + word2Match?.length
      if (totalLength === 2) total += 1
   })

   return total
}

console.log(
   countWords(
      ['leetcode', 'is', 'amazing', 'as', 'is'],
      ['amazing', 'leetcode', 'is']
   )
)
