import { useState } from 'react'
import TodoList from './components/ToDoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TodoList/>
    </>
  )
}

export default App
