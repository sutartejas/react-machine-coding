import TrafficLight from './components/TrafficLight'
import './App.css'

function App() {
  const config = {
    red: {
      bgColor: 'red',
      duration: 300,
      nextColor: 'green'
    },
    green: {
      bgColor: 'green',
      duration: 300,
      nextColor: 'yellow'
    },
    yellow: {
      bgColor: 'yellow',
      duration: 300,
      nextColor: 'red'
    }
  }

  return (
      <div className='App'>
        <h1>Traffic Light</h1>
        <TrafficLight config={config}/>
    </div>
  )
}

export default App
