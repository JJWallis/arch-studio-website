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
// Understand problem (repeat it with diff words)
// devise a plan - take lager issue + break down into smaller
// execute plan - from outline of plan via comments
// what do I currently know
// review solution - better approach?, can go back if run into issue

// There is a programming language with only four operations and one variable X:
//  ++X and X++ increments the value of the variable X by 1.
//  --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.
// Given an array of strings operations containing a list of operations,
// return the final value of X after performing all the operations.

function finalValueAfterOperations(operations: string[]) {
   return operations.reduce(
      (acc, curr) => (curr.includes('--') ? acc - 1 : acc + 1),
      0
   )
}

console.log(finalValueAfterOperations(['--X', 'X++', 'X++']))
