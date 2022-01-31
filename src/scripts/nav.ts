function encode(input: string) {
   return input
      .replace(/(\w)\1+/g, (match) => `${match.length} ${match[0]}`)
      .split(' ')
      .join('')
}

encode('wwwiiuuuu')

function decode(input: string) {
   return input.replace(/(\d+)(\w)/g, (x, y, z) => {
      console.log(x, y, z)
      return z.repeat(y)
   })
}

decode('3w2i4u')
