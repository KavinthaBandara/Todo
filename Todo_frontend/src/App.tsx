//import { Link } from 'react-router-dom'
import Todo from "./components/Add"
import './App.css'
// <Link to="/Add" className="add-todo-link">Add Todo</Link>
function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Todo App</h1>
        <Todo />
       

      </div>
    </>
  )
}

export default App
