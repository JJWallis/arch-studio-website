// implement map() with reduce()
// performs callback func on arr
// console.log(map([1, 2, 3], (v => v + 1))); = [2, 3, 4]

function map(arr: number[], callback: (v: number) => number) {
   return arr.reduce((acc, curr) => [...acc, callback(curr)], [])
}

console.log(map([1, 2, 3], (v: number) => v + 1))
