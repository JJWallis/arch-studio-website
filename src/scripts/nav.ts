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

// You are given coordinates, a string that represents the coordinates of a square of the chessboard
// Return true if the square is white, and false if the square is black.
// The coordinate will always represent a valid chessboard square.
// The coordinate will always have the letter first, and the number second.

function squareIsWhite(coordinates: string): boolean {
   // odd number with even letter = black
   // even number with odd letter = white
   const alphabet = 'abcdefgh'.split('')
   console.log(alphabet)
   return true
}

console.log(squareIsWhite('a1'))
