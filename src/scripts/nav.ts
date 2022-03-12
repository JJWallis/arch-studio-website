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

function cellsInRange(s: string): string[] {
   const [start, end] = s.split(':')
   // declare alphabet str/arr
   // letter range = find() starting letter + retrieve index | find() index of ending letter too
   // number range = + Math.min of starting number + Math.max of ending number
   // this will determine how many times we iterate over each letter + push(letterWithCurrNum) to resulting arr - including starting/ending num
   return []
}

console.log(cellsInRange('K1:L2')) // ['K1', 'K2', 'L1', 'L2']

//   type dynamic - button + input
//   label dynamic
//   input name dynamic + value required to make next/submit btn enabled
//       ref to focus input

// const initialState = ['', '', '', '']

// const App: React.FC = () => {
//   const [inputs, setInputs] = React.useState(initialState)
//   const [current, setCurrent] = React.useState(0)

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     inputs[current] = e.target.value
// //   }

//   const handleSubmit = (e: React.SubmitEvent) => {
//     // async/await
//     return null
//   }

//   return (
//       <form id="form" onSubmit={handleSubmit}>
//         <button type="button">&larr; Back</button>
//         <legend>Form control</legend>
//         <label for="input">label</label>
//         <input id="input" value={inputs[current]} onChange={(e) => setInputs([...inputs, inputs[current]: e.target.value])}  />
//         <button>Next</button>
//       </form>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('app'));
