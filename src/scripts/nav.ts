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

// const initialState = [
//    { name: 'name', value: '' },
//    { name: 'email', value: '' },
//    { name: 'date', value: '' },
//    { name: 'password', value: '' },
// ]

// const App: React.FC = () => {
//    const [inputs, setInputs] = React.useState(initialState)
//    const [current, setCurrent] = React.useState(0)
//    const inputRef = React.useRef(null)
//    const label = inputs[current].name

//    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, data) => {
//       e.preventDefault()
//       const [name, email, date, password] = data
//       const dataToSend = data.reduce(
//          (acc, { name, value }) => ({ ...acc, [name]: value }),
//          {}
//       )
//       // async/await + validation
//       // show success screen
//       return null
//    }

//    const handleChange = (e: any) => {
//       const desired = [...inputs]
//       desired[current].value = e.target.value
//       setInputs(desired)
//    }

//    // React.useEffect(() => inputRef.current.focus() ,[current])

//    return (
//       <form id="form" onSubmit={(e) => handleSubmit(e, inputs)}>
//          <button
//             type="button"
//             style={{ display: `${!current ? 'none' : 'block'}` }}
//             onClick={() => setCurrent((prev) => prev - 1)}
//          >
//             &larr; Back
//          </button>
//          <legend>Multi-step form</legend>
//          <label htmlFor={label}>{label}</label>
//          <input
//             type={
//                inputs[current].name === 'name' ? 'text' : inputs[current].name
//             }
//             ref={inputRef}
//             id={label}
//             value={inputs[current].value}
//             onChange={handleChange}
//          />
//          <button
//             type={current === inputs.length - 1 ? 'submit' : 'button'}
//             disabled={!inputs[current].value}
//             onClick={() =>
//                current !== inputs.length - 1 && setCurrent((prev) => prev + 1)
//             }
//          >
//             {current === inputs.length - 1 ? 'Submit' : 'Next'}
//          </button>
//       </form>
//    )
// }

// ReactDOM.render(<App />, document.getElementById('app'))
