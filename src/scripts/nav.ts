// make rows cols
// transposeMatrix([[1,2,3], [1,2,3], [1,2,3]]) returns [[1,1,1], [2,2,2], [3,3,3]]

function transposeMatrix(arr: any) {
   const results = []
   arr.map(([val]) => val)
   return results
   // map() over each arr + return a new array with el at desired index + 1 each time
   // reduce + push() to accumilator until run out els (arrs) in original arr
   // returns new arr with all els at corresponding index
   // recursivley call function with index of curr val + 1 (grab from reduce)
}

console.log(
   transposeMatrix([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
   ])
)
