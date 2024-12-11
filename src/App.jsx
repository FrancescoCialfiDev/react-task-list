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
            <h6>{element.title} <span className="badge p-2">{element.state}</span></h6>
            <p>{`Priority: ${element.priority}`}</p>
            <p>{`Est. Time: ${element.estimatedTime}`}</p>
        </li>
    })

    const complete = taskComplete.map((element) => {
        return <li key={element.id} className='list-unstyled'>
            <h6>{element.title} <span className="badge p-2">{element.state}</span></h6>
            <p>{`Priority: ${element.priority}`}</p>
            <p>{`Est. Time: ${element.estimatedTime}`}</p>
        </li>
    })

    // Sviluppo html 
    return (
        <>

            <h5>Current Tasks</h5>
            <ul className='firstList'>
                {incomplete}
            </ul>
            <hr />
            <h5>Completed Tasks</h5>
            <ul className='secondtList'>
                {complete}
            </ul>


        </>
    )
}



export default App;