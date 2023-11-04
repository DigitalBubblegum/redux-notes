import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer.js'


// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer
// })

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})

// noteService.getAll().then(notes => store.dispatch(setNotes(notes)))
console.log(store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

renderApp()
// store.subscribe(renderApp)