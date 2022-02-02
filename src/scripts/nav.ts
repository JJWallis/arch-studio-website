function isPangram(str: string) {
   const alphabet = 'abcdefghijklmnopqrstuvwxyz'
   const validated = str.toLowerCase().split(' ').join('').split('').sort()

   console.log(alphabet)
   console.log(validated)
   return true || false
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
