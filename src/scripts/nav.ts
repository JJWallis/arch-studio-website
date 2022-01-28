// Isogram check function
// isIsogram(str) + returns true if the string is an isogram, false otherwise
// isogram - str which has every letter appearing only once within the string (no repeated letters in str itself)
// Case - capital letters

function isIsogram(inputStr: string) {
   const str = inputStr.toLowerCase().split('')
   const duplicates = new Set(str).size
   console.log(str)
   return str.length === duplicates || false
}

console.log(isIsogram('Dermatoglyphicsd')) // true
