// consecutive data els are replaced by a single data val + count of that val
// ex: console.log(encode('wwwiiuuuu')); // 3w2i4u
// ex: console.log(decode('3w2i4u')); // wwwiiuuuu

function encode(input: string) {
   const inputArr = input.split('').sort()
   console.log(inputArr)
   console.log(inputArr.filter((item, idx, arr) => item === arr[idx + 1]))
}

console.log(encode('wwwiiuuuu')) // 3w2i4u

function decode(input: string) {}
