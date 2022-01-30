// leap year = divisble by 4 without remainder (occurs every 4 years)
// except for century years that are divisible by 400 (1700 = false return)
// (ex: 1600 = true return as still a leap year)
// evenly divisible by 400
// Edge cases: divisible by 4, 100, years which aren't divisible by 400

function isLeapYear(year: string) {
   const yearNum = parseInt(year, 10)
   if (yearNum % 4 === 0) {
      return true
   }
   //    return true
}

console.log(isLeapYear('1700'))
