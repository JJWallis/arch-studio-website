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

// There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.
// You are given a string rings of length 2n that describes the n rings that are placed onto the rods.
// Every two characters in rings forms a color-position pair that is used to describe each ring where:
// The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
// The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
// Return the number of rods that have all three colors of rings on them.

function countPoints(rings: string) {
   if (!rings.length) return 0
   const pairs = rings.match(/[rgb]\d/gi)
   const duplicatesRemoved = [...new Set(pairs)].join('')
   // console.log(duplicatesRemoved)
   const match = duplicatesRemoved.match(/(?<=[rgb])\d/gi)
   console.log(match)
   // reduce over returned regex matched array or length

   return match.map((valOuter) => {
      let count = 0
      match.map((valInner) => {
         if (valOuter === valInner) count++
         if (count === 3) return valOuter
      })
   })
}

console.log(countPoints('B0B0B0B6G0R6R0R6G9')) // 1
