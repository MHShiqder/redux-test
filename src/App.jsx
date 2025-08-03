import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddTodo></AddTodo>
     <Todos> </Todos>
    </>
  )
}

export default App
