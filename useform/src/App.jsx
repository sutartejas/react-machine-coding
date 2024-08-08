import { useState } from 'react'
import UseForm from './components/UseForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseForm />
    </>
  )
}

export default App
