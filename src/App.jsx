// Importazione stile css Default
import './App.css'
// Importiamo l'array dal file tasks.js situato all'interno della cartella data
import tasks from "../data/tasks"


function App() {
    // Logica Funzionamento
    const taskIncomplete = tasks.filter((element) => {
        return element.state.includes("in_progress") || element.state.includes("backlog")
    })
    const taskComplete = tasks.filter((element) => {
        return element.state.includes("completed")
    })
    console.log(taskIncomplete);
    console.log(taskComplete);

    const incomplete = taskIncomplete.map((element) => {
        return <li key={element.id} className='list-unstyled'>
            <h1>{element.title}</h1>
            <p>{`Priority: ${element.priority}`}</p>
            <p>{`Est. Time: ${element.estimatedTime}`}</p>
        </li>
    })

    // Sviluppo html 
    return (
        <>
            <h1>Hello World!</h1>

            <h2>Task da fare</h2>

            <ul>
                {incomplete}
            </ul>
        </>
    )
}



export default App;