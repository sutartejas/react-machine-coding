
import DarkTheme from './components/DarkTheme';
import { ThemeProvider } from './useThemeContext'
import './App.css'

function App() {

  return (
    <ThemeProvider><div className='App'>
      <h1>Dark Theme</h1>
      <DarkTheme />
    </div></ThemeProvider>

  )
}

export default App
