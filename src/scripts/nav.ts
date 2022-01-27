// pangram check function - Pangram is a str or sentence which contains all letters of English alphabet at least once
// isPangram(str) - returns either true if str passed is Pangram or false if not
// Gotchas - str which contains capitals works with str that doesn't | str which contains spaces - trim before checking
// console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true
// console.log(isPangram('This is not a pangram')); // false
// Solution: split(' ') = removes all spaces | match original str - join() + sort() as well

function isPangram(str: string) {
   const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
   const inputArr = str.replace(/\s/g, '').toLowerCase().split('')
   const results = [
      ...new Set(
         inputArr.filter((letter) =>
            alphabet.find((alphaLetter) => alphaLetter === letter)
         )
      ),
   ]
   return results.length === 26 ? true : false
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
