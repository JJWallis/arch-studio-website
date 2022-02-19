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

// You are given a string s and an integer array indices of the same length
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string
// Return the shuffled string

function restoreString(s: string, indices: number[]): string {
   const results = Array(s.length) as string[]
   indices.forEach((num, idx) => (results[num] = s[idx]))
   return results.join('')
}

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]))
