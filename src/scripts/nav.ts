// implement flatten nested array using recursive reduce
// console.log(makeFlat(["one", ["two", "three"]], ["four", ["five"]]))

function makeFlat(arrOne: any) {
   return arrOne.reduce((acc, curr) => {
      return Array.isArray(curr) ? [...acc, ...makeFlat(curr)] : [...acc, curr]
   }, [])
}

console.log(makeFlat(['one', [['two', 'three']]]))
