import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { Provider } from 'urql'
import { client } from './constants/graphqlConstants'
import { BrowserRouter, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={ client }>
      <App />
    </Provider>
  </React.StrictMode>
)
