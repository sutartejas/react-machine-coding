
import Accordion from './components/Accordion';
import questions from './questions';
import './App.css'

function App() {

  return (
    <div className='app'>
      <h1>Accordion</h1>
      {questions.map((que, i) => {
        return <Accordion questions={que} key={i}/>
      })}
    </div>
  )
}

export default App
