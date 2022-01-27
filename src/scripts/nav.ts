// pangram check function - Pangram is a str or sentence which contains all letters of English alphabet at least once
// isPangram(str) - returns either true if str passed is Pangram or false if not
// Gotchas - str which contains capitals works with str that doesn't | str which contains spaces - trim before checking
// console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true
// console.log(isPangram('This is not a pangram')); // false

function isPangram(str: string) {
   const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
   const strArr = str.replace(/\s/g, '').toLowerCase().split('')
   const results = strArr.filter(
      (letter) => !alphabet.find((usedLetter) => usedLetter === letter)
   )
   console.log(strArr)
   return results.length === 26 ? true : false
}

isPangram('hey there')
// loop over to add each letter to an array if it isn't already there
