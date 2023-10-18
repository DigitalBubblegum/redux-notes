import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore } from 'redux'
import noteReducer from "./reducers/noteReducer"
const store = createStore(noteReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}
renderApp()
store.subscribe(renderApp)