import { useState } from 'react'
import Tabs from './components/Tabs';
import {tabsData} from './data'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Tabs tabsData={tabsData} currentIndex={0} />
    </div>
  )
}

export default App
