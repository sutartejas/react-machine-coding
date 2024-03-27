
import Carousal from './components/Carousal'
import CarousalData  from './data'
import './App.css'

function App() {

  return (
    <div className='App'>
      <h1>Carousal</h1>
      <Carousal data={CarousalData}/>
    </div>
  )
}

export default App
