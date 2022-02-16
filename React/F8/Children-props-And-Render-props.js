// function List({data, children}) {

//     return (
//         <ul>
//             {data.map((...props) => children(...props))}
//         </ul>
//     )
// }


// function App() {
//     const cars = ['BMW', 'Honda', 'Mazda'];

//     return (
//         <div id = "wrapper">
//             <List data = {cars}> 
//                 {(item, index) => <li key = {index}>{item}</li>}
//             </List>
//         </div>
//     )
// }

// function Button({children}) {

//     return (
//         <button>{children}</button>
//     )
// }

// function App() {

//     return (
//         <div id = "wrapper">
//             <Button>Click me!</Button>
//         </div>
//     )
// }

function List({data}) {

    return (
        <ul>
            {data.map(item => <li key = {item}>{item}</li>)}
        </ul>
    )
}


function App() {
    const cars = ['BMW', 'Honda', 'Mazda'];

    return (
        <div id = "wrapper">
            <List data = {cars}> 
                {(item, index) => <li key = {index}>{item}</li>}
            </List>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));