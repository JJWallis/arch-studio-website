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

function findMiddleIndex(nums: number[]) {
   for (let i = 0; i < nums.length; i++) {
      const curr = nums[i]
      const leftArr = nums.slice(0, i)
      const rightArr = nums.slice(i + 1, nums.length)

      if (!leftArr.length || !rightArr.length) continue

      console.log(leftArr, rightArr)
   }
}

console.log(findMiddleIndex([2, 3, -1, 8, 4])) // 3
