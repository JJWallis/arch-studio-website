// Input: n = 3
// Output: ["1","2","Fizz"]

function fizzBuzzCalculator(n: number) {
   const arr = []
   for (let i = 1; i <= n; i++) {
      let str = ''
      if (i % 3 === 0) str += 'Fizz'
      if (i % 5 === 0) str += 'Buzz'
      arr.push(str ? str : i.toString())
   }
   return arr
}

console.log(fizzBuzzCalculator(5))
