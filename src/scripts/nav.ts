// leap year = divisble by 4 without remainder (occurs every 4 years)
// except for century years that are not divisible by 400 (1700 = false return)
// century leap year is evenly divisible by 400 - (ex: 1600 = true return as still a leap year)
// Edge cases: divisible by 4, 100, years which aren't divisible by 400

function isLeapYear(year: string) {
   const yearNum = parseInt(year, 10)
   if ((yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0) {
      return true
   }
   return false
}

console.log(isLeapYear('1700'))
