const hamburger = document.getElementById(
   'hamburger-toggle'
) as HTMLButtonElement
const navMb = document.querySelector('.nav--pm') as HTMLElement

hamburger.addEventListener('click', () => {
   const status = navMb.getAttribute('data-visible')
   navMb.setAttribute('data-visible', status === 'true' ? 'false' : 'true')
   console.log(status)
})

// OOP Style
// easy to `understand` vs `maintainable` code vs shortest method
// Understand problem (repeat it with diff words) - Asking `clarifying` questions (unclear requirements + edge cases)
// devise a plan - take lager issue + break down into smaller
// execute plan - from outline of plan via comments
// what do I currently know
// review solution - better approach? + `refactor` for readability, extensibility, re-usability, and performance

let data: any

const fetchData = async (endpoint: string) => {
   try {
      const res = await fetch(endpoint)
      const data = await res.json()
      return data
   } catch (error) {
      console.error(error)
   }
}

const run = async (teamKey: string) => {
   try {
      const { rounds } = await fetchData(
         'https://s3.eu-west-1.amazonaws.com/hackajob-assets1.p.hackajob/challenges/football_session/football.json'
      )
      const matches = rounds.map(({ matches }) => matches)
      const games = matches.map(([game]) => game)
      const desiredTeam = games.filter(
         (game) => game.team1.key === teamKey || game.team2.key === teamKey
      )
      const results = desiredTeam.map((team) => {
         let target: number
         target = team.team1.key === teamKey ? 1 : 2
         return team[`score${target}`]
      })
      return results.reduce((acc, curr) => acc + curr, 0)
   } catch (error) {
      console.error(error)
   }
}

;(async function () {
   try {
      const body = await run('arsenal')
      data = body
   } catch (error) {
      console.error(error)
   }
})()
