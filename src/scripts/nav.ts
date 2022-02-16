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
// review solution - better approach?, can go back if run into issue

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively
// It does not matter what you leave beyond the returned k (hence they are underscores)

function removeDuplicates(nums: (number | string)[]) {
   nums.sort()

   let i = 0
   for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
         nums[i] = nums[j]
         i++
         console.log('running')
      }
   }
   return i + 1
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
