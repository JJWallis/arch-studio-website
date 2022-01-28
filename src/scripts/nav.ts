// Isogram check function
// isIsogram(str) + returns true if the string is an isogram, false otherwise
// isogram - str which has every letter appearing only once within the string (no repeated letters in str itself)
// Case - capital letters

const isIsogram = (string) => {
   const lowerCased = string.toLowerCase()
   const result = lowerCased
      .split('')
      .every((v, i) => console.log(v, i) || lowerCased.indexOf(v) === i)
   return result
}
