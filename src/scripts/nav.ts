// implement map() with reduce()
// performs callback func on arr
// console.log(map([1, 2, 3], (v => v + 1))); = [2, 3, 4]

const callback = (v: number) => v + 1

function map(arr: number[], callback: (v: number) => number) {}

console.log(map([1, 2, 3], callback))
