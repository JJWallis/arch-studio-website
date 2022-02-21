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

// You are given an array items, where each items[i] = [typei, colori, namei]
// You are also given a rule represented by two strings, ruleKey and ruleValue
// The ith item is said to match the rule if one of the following is true:
//  ruleKey == "type" and ruleValue == typei
//  ruleKey == "color" and ruleValue == colori
//  ruleKey == "name" and ruleValue == namei
// Return the number of items that match the given rule

function countMatches(
   items: string[][],
   ruleKey: string,
   ruleValue: string
): number {
   return 0
}
