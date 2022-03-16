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

// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi].
// Return the minimum time in seconds to visit all the points in the order given by points.
// You can move according to these rules:
// In 1 second, you can either:
//  move vertically by one unit,
//  move horizontally by one unit, or
//  move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
// You have to visit the points in the same order as they appear in the array.
// You are allowed to pass through points that appear later in the order, but these do not count as visits.

function minTimeToVisitAllPoints(points: number[][]): number {
   // if there is a repeated point, we can skip it (only need to find diff with other)
   // only need to go diagonally when there are are no repeated coordinates
   // go diagonally until one coordinate is found - then incremement/decrememnt to match the other
   return points.reduce((total, [currX, currY], idx, arr) => {
      let seconds = 2
      if (idx === arr.length - 1) return total
      const [nextX, nextY] = arr[idx + 1]
      return total + seconds
   }, 0)
}

console.log(
   minTimeToVisitAllPoints([
      [1, 1],
      [3, 4],
      [-1, 0],
   ])
)
