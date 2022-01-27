// pangram check function - Pangram is a str or sentence which contains all letters of English alphabet at least once
// isPangram(str) - returns either true if str passed is Pangram or false if not
// Gotchas - str which contains capitals works with str that doesn't | str which contains spaces - trim before checking
// console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true
// console.log(isPangram('This is not a pangram')); // false
// Solution: split(' ') = removes all spaces | match original str - join() + sort() as well | match() method (regex arr) | size prop on Set()

function isPangram(str: string) {
   //    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
   const processedStr = new Set(str.toLowerCase().match(/[a-z]/gi))
   return processedStr.size === 26
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
