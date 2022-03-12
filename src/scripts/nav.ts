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

function numJewelsInStones(jewels: string, stones: string): number {
   // split jewels into array to determine each char to match
   // loop over arr + match str with each char + return length of that match if truthy (avoid zero)
   // if not filter through to remove all zeros
   // reduce over arr to add total
   return 0
}

console.log(numJewelsInStones('aA', 'aAAbbbb')) // 3

// const initialState = ['', '', '', '']

// const App: React.FC = () => {
//   const [inputs, setInputs] = React.useState<string[]>(initialState)
//   const [current, setCurrent] = React.useState<number>(0)

//       //   type dynamic - button + input
//       //   label dynamic
//       //   input name dynamic

//   return (
//       <form id="form">
//         <button>&larr; Back</button>
//         <legend>Form control</legend>
//         <label for="input">label</label>
//         <input id="input" name="test" value={inputs[current]} onChange={(e) => setInputs([...inputs, inputs[current]: e.target.value])}  />
//         <button>Next</button>
//       </form>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('app'));
