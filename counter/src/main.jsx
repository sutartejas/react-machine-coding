import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducres from './redux/reducers/index.js';

const store = createStore(reducres)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   
  </React.StrictMode>,
)
