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

// There is a hidden integer array arr that consists of n non-negative integers
// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]
// You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0]
// Return the original array arr. It can be proved that the answer exists and is unique

function decode(encoded: number[], first: number): number[] {
   return encoded.reduce((acc, num, idx) => {
      let diff: number
      if (!idx) {
         acc.push(first)
         diff = num - first
      }
      return [...acc, diff]
   }, [])
}

console.log(decode([6, 2, 7, 3], 4)) // [4, 2, 0, 7, 4]
