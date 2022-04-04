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

// produce two lists - one with all the names of the characters who appeared in the given film in alphabetical order
// second - with all the films in which the given character appeared, in the alphabetical order
// It's really important to URL encode the film title and chatacter name before calling the API
// https://challenges.hackajob.co/swapi/api/people/?search= + character
// https://challenges.hackajob.co/swapi/api/films/?search= + film

function run(film: string, character: string) {
   let filmsAndCharacters: string = ''
   return filmsAndCharacters
}
