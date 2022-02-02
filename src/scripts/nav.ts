function transposeMatrix(arr: number[][]) {
   return arr.map((_, idx) => arr.map((val) => val[idx]))
}

console.log(
   transposeMatrix([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
   ])
)
