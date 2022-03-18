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

//  You are given an integer n, the number of teams in a tournament that has strange rules:
//  If the current number of teams is even, each team gets paired with another team.
//  A total of n / 2 matches are played, and n / 2 teams advance to the next round.
//  If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired.
//  A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
//  Return the number of matches played in the tournament until a winner is decided.

function numberOfMatches(n: number): number {
   return 0
}

console.log(numberOfMatches(7)) // 6
