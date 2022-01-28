function toRainLanguage(numInput: number) {
   let output = ''
   if (numInput % 3 === 0) output += 'Pling'
   if (numInput % 5 === 0) output += 'Plang'
   if (numInput % 7 === 0) output += 'Plong'
   return output || numInput
}

console.log(toRainLanguage(21))
