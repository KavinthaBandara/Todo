//import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./components/Add"
import ViewTodos from "./components/viewtodo";
// <Link to="/Add" className="add-todo-link">Add Todo</Link>
function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <h1>Todo App</h1>
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<Todo />} />
              <Route path="/viewtodos" element={<ViewTodos />} />
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
