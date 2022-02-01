// implement flatten nested array using recursive reduce
// console.log(makeFlat(["one", ["two", "three"]], ["four", ["five"]]))

function makeFlat(arrOne: [string, string[]], arrTwo: [string, string[]]) {
   return arrOne.reduce((acc, curr) => {
      return null
   }, [])
}

console.log(makeFlat(['one', ['two', 'three']], ['four', ['five']]))
