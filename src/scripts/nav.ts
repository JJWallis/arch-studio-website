function encode(input: string) {
   const inputArr = input
      .replace(/(\w)\1+/g, (match) => `${match.length} ${match[0]}`)
      .split(' ')
      .join('')
   console.log(inputArr)
}

console.log(encode('wwwiiuuuu')) // 3w2i4u

function decode(input: string) {}

console.log(decode('3w2i4u')) // wwwiiuuuu
