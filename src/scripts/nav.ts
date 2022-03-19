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

// const initialData = [
//    2, 6, 1, 10, 1, 2, 1, 2, 2, 7, 7, 1, 3, 7, 2, 5, 7, 3, 5, 7, 10, 6, 3, 8, 3,
//    9, 7, 2, 9, 4, 1, 4, 8, 1, 10, 8, 4, 9, 2, 1, 2, 7, 1, 7, 7, 7, 10, 1, 7, 2,
//    8, 4, 2, 1, 8, 9, 4, 4, 8, 7, 3, 10, 5, 10, 9, 9, 10, 4, 8, 2, 5, 9, 10, 7,
//    6, 5, 10, 10, 7, 9, 6, 2, 6, 7, 8, 3, 10, 7, 10, 3, 2, 1, 1, 8, 5, -1,
// ]

// const gatherColumns = (): number[] => {
//    const data = [...new Set(initialData)].sort()
//    const tenIdx = data.indexOf(data.find((num) => num === 10))
//    data.splice(tenIdx, 1)
//    data.push(10)
//    return data
// }

// const gatherRows = () => {
//    const columns = gatherColumns()
//    const data = columns.map(
//       (num) => initialData.filter((number) => num === number).length
//    )
//    return data
// }

// const App = () => {
//    const [randomNumbers, setRandomNumbers] = React.useState(initialData)
//    const columns = gatherColumns()
//    const rows = gatherRows()
//    const max = Math.max(...rows)
//    const printRows = () => {
//       const results = []
//       for (let i = 0; i <= max; i++) results.push(i)
//       return results.reverse()
//    }

//    const gatherColsRows = () => {
//       return columns.reverse().map((col, idx) => ({
//          number: col,
//          amount: rows[idx],
//          color: `hsl(100, 200%, ${idx}%)`,
//       }))
//    }

//    const colRows = gatherColsRows()

//    return (
//       <main className="main">
//          <div className="flex-ct">
//             <ul className="graph__rows">
//                {printRows().map((num, idx) => (
//                   <li key={idx}>{num}</li>
//                ))}
//             </ul>
//             <article className="graph">
//                {colRows.map(({ amount, color }, idx) => (
//                   <div
//                      key={idx}
//                      style={{
//                         height: `${Math.floor((amount / max) * 100)}%`,
//                         backgroundColor: `${color}`,
//                      }}
//                      className="column"
//                   ></div>
//                ))}
//                <div className="graph__cols">
//                   {columns.map((num, idx) => (
//                      <li key={idx}>{num}</li>
//                   ))}
//                </div>
//             </article>
//          </div>
//       </main>
//    )
// }

// ReactDOM.render(<App />, document.getElementById('app'))
