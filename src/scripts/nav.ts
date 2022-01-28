// toRainLanguage(int) - returns either str or num
// 1st case - number is divisible by 3 (3 as a factor) without remainder = output "Pling"
// 2nd case - number is divisible by 5 (5 as a factor) without remainder = output "Plang"
// 3rd case - number is divisible by 7 (7 as a factor) without remainder = output "Plong"
// 4th case - number is divisible by any combo of numbers without remainder = output "PlingPlong" (21 = ex)
// 5th case - number is not divisible by any combo of numbers without remainder = output the number itself

const map = new Map().set(3, 'Pling').set(5, 'Plang').set(7, 'Plong')

function toRainLanguage(numInput: number) {
   const numbers = [...map.keys()]
   const results = numbers.filter((num) => numInput % num === 0)
   return results.map((num) => map.get(num)).join('') || numInput
}

console.log(toRainLanguage(10))
