// Importazione stile css Default
import './App.css'
// Importiamo l'array dal file tasks.js situato all'interno della cartella data
import  tasks  from "../data/tasks"


function App() {
 // Logica Funzionamento

const arrayFiltred = tasks.filter((element) => {
 return  element.state.includes("in_progress") || element.state.includes("backlog")
})
console.log(arrayFiltred);






 return (
<ul></ul>
 )

}

export default App;