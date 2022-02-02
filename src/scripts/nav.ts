// str which all letters are present only once

function isIsogram(input: string) {
   const stringToLowerCase = input.toLowerCase()
   const letters = stringToLowerCase.split('')
   return letters.every(
      (letter, idx) => stringToLowerCase.indexOf(letter) === idx
   )
}

console.log(isIsogram('Dermatoglyphics')) // true
