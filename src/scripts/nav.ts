// leap year = divisble by 4 without remainder (occurs every 4 years)
// except for century years that are not divisible by 400 (1700 = false return)
// century leap year is evenly divisible by 400 - (ex: 1600 = true return as still a leap year)
// year that is evenly divisible by 100 - leap year only if it is also evenly divisible by 400.
// This is because they are evenly divisible by 100 but not by 400

function isLeapYear(year: string) {
   const yearNum = parseInt(year, 10)
   if ((yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0) {
      return true
   }
   return false
}

console.log(isLeapYear('1700'))
