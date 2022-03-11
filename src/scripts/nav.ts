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

// interface Inputs {
//    name: string
//    email: string
//    date: string
//    password: string
//  }

//  const App: React.FC = () => {
//    const [inputs, setInputs] = React.useState()

//    return (
//        <div>
//          <button>&larr; Back</button>
//          <label for="label">label</label>
//           <input id="label"  />
//        </div>
//    )
//  }

//  ReactDOM.render(<App />, document.getElementById('app'));
