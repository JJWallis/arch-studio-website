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
// what do I currently know
// execute plan - from outline of plan via comments
// review solution - better approach?, can go back if run into issue

function getConcatenation(nums: number[]): number[] {
   const concatArr = []
   const length = nums.length
   for (let i = 0; i < length; i++) {
      concatArr[i] = nums[i]
      concatArr[i + length] = nums[i]
   }
   return concatArr
}

console.log(getConcatenation([1, 2, 3, 4, 5]))
