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
// Understand problem (repeat it with diff words)
// devise a plan - take lager issue + break down into smaller
// execute plan - from outline of plan via comments
// what do I currently know
// review solution - better approach?, can go back if run into issue

// Goal Parser that can interpret a string command which
// consists of an alphabet of "G", "()" and/or "(al)" in some order
// "G" => "G"
// "()" => "o"
// "(al)" => "al"
// The interpreted strings are then concatenated in the original order
// Given the string command, return the Goal Parser's interpretation of command

function interpret(command: string): string {
   return ''
}

console.log(interpret('G()(al)'))
