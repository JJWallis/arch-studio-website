// remove duplicates from arr with reduce

function removeDuplicateValues(arr: string[]) {
   return arr.reduce((prevReturn, curr, idx) => {
      return undefined
   }, [])
}

console.log(
   removeDuplicateValues(['one', 'two', 'one', 'three', 'three', 'two'])
) // ['one','two','three']
