import { useState } from 'react'
import './App.css'
import ChessBoard from './components/ChessBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChessBoard />
    </>
  )
}

export default App
