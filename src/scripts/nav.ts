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

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.
// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6

function mostWordsFound(sentences: string[]) {
   if (
      sentences.length === 0 ||
      !sentences.every((sentence) => sentence.includes(' '))
   )
      return 0
   sentences.forEach((sentence) => sentence.toLowerCase())
   return Math.max(...sentences.map((sentence) => sentence.split(' ').length))
}

console.log(
   mostWordsFound([
      'alice and bob love leetcode hey there',
      'i think so too',
      'this is great thanks very much',
   ])
)
