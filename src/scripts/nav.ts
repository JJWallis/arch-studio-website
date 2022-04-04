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

const morseCode = [
   '.-',
   '-...',
   '-.-.',
   '-..',
   '.',
   '..-.',
   '--.',
   '....',
   '..',
   '.---',
   '-.-',
   '.-..',
   '--',
   '-.',
   '---',
   '.--.',
   '--.-',
   '.-.',
   '...',
   '-',
   '..-',
   '...-',
   '.--',
   '-..-',
   '-.--',
   '--..',
]

function uniqueMorseRepresentations(words: string[]): number {
   const alphabet = 'abcdefghijklmnopqrstuvwxyz'
   const results = words.map((word) => {
      const curr = word.split('') // imperative loop here
      return curr.map((letter) => morseCode[alphabet.indexOf(letter)]).join('')
   })
   return new Set(results).size
}

// replace method?

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])) // 2
