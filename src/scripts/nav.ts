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

// You are given an m x n integer grid accounts where accounts[i][j]
// is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank
// Return the wealth that the richest customer has
// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth

function maximumWealth(accounts: number[][]): number {
   return Math.max(
      ...accounts.map((account) => account.reduce((a, b) => a + b, 0))
   )
}

console.log(
   maximumWealth([
      [1, 2, 3],
      [3, 2, 1],
   ])
)
