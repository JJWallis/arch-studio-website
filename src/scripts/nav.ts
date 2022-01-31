// remove duplicates from arr with reduce

function removeDuplicateValues(arr: string[]) {
   return arr.reduce((acc, curr) => {
      return acc.includes(curr) ? acc : [...acc, curr]
   }, [])
}

console.log(
   removeDuplicateValues(['one', 'two', 'one', 'three', 'three', 'two'])
) // ['one','two','three']
