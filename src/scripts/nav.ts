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
