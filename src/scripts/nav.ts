// number divisble by 3 = pling
// number divisble by 5 = plang
// number divisble by 7= plong
// return num itself in other cases

function toRainLanguage(input: number) {
   let output = ''
   if (input % 3 === 0) output += 'Pling'
   if (input % 5 === 0) output += 'Plang'
   if (input % 7 === 0) output += 'Plong'
   return output || input
}

console.log(toRainLanguage(21))
