import './App.css'
import ProgressBar from './components/ProgressBar'
import { useEffect, useState } from 'react';
function App() {
  const [val, setVal] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVal(val => val + 1)
    }, 100)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className="progress-bar">
      <h1>Progress Bar</h1>
      <ProgressBar value={val} />
    </div>
  )
}

export default App
